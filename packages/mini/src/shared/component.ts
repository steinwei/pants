export type OptionsType = {
  behaviors: any;
};

function mapKeys(source, target) {
  Object.keys(source).forEach((key) => {
    if (source[key]) {
      target[key] = source[key];
    }
  })
}

export function PantsComponent(options) {
  let state = {} as OptionsType;

  mapKeys(options, {
    data: 'data',
    props: 'properties',
    watch: 'observers',
    methods: 'methods',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses',
  });

  // default behaviors

  // default externalClasses

  // default relations
  const { relation } = options;
  if (relation) {
    options.relations = relation.relations;
    options.behaviors.push();
  }

  if (options.mixins) {
    state.behaviors = { ...options.mixins };
  }

  return Component(state);
}

