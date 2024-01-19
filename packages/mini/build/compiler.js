const path = require('path');

const { exec } = require('child_process');
const less = require('gulp-less');
const tsc = require('gulp-typescript');
const gulp = require('gulp');

const exampleDistDir = path.resolve(__dirname, '../examples');
const esmDir = path.resolve(__dirname, '../dist');
const esmConfig = path.resolve(__dirname, '../tsconfig.json');
const cjsDir = path.resolve(__dirname, '../lib');
const cjsConfig = path.resolve(__dirname, '../tsconfig.node.json');


function lessCompiler(dist) {
  return () => {
    const srcPath = [`${src}/**/*.less`];
    return gulp.src(srcPath)
      .pipe(less())
  }
}

function tsCompiler(dist, config) {
  return () => {
    const tsProject = tsc.createProject(config);
    const tsResule = tsProject.src().pipe(tsProject);

    return tsResule.js.pipe()
  }
}

function cleaner(dist) {
  exec('npx rimraf ' + dist)
}

function assetsCopier(dist) {
  gulp.parallel(
    copier(dist, 'wxml'),
    copier(dist, 'wxs'),
    copier(dist, 'less'),
  )
}

function copier(dist, ext) {
  const src = [`${src}/**/*.${ext}`];

  return gulp.src(src).pipe(dist);
}

const tasks = [
  ['buildEs', esmDir, esmConfig],
  ['buildLib', cjsDir, cjsConfig],
].reduce((prev, [name, ...args]) => {
  prev[name] = gulp.series(
    cleaner(...args),
    gulp.parallel(
      tsCompiler(...args),
      lessCompiler(...args),
      assetsCopier(...args),
    )
  )
  return prev;
}, {})

tasks.buildExample = gulp.series(
  cleaner(exampleDistDir),
  gulp.parallel(
    tsCompiler(exampleDistDir),
    lessCompiler(exampleDistDir),
    assetsCopier(exampleDistDir),
  ),
  () => {
    gulp.watch(`${src}/**/*.less`, lessCompiler(exampleDistDir));
    gulp.watch(`${src}/**/*.wxml`, copier(exampleDistDir));
    gulp.watch(`${src}/**/*.wxs`, copier(exampleDistDir));
    gulp.watch(`${src}/**/*.json`, copier(exampleDistDir));
  }
);
