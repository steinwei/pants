const ci = require('miniprogram-ci');
const path = require('path');
const config = require('../examples/project.config.json');
const package = require('../package.json');

const project = new ci.Project({
  appid: config.appid,
})

ci.upload({
  project,
  version: package.version,
  desc: package.description,
  setting: config.setting,
})
