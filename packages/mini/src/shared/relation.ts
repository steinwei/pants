type RelationOption = WechatMiniprogram.Component.RelationOption;
type TrivialInstance = WechatMiniprogram.Component.TrivialInstance;

export function useParent(
  name: string,
  onEffect?: () => void
) {
  const path = `../${name}/index`;

  return {
    relations: {
      [path]: {
        type: 'ancestor',
        linked(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
        linkChanged(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
        unlinked(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
      } as RelationOption
    },
    mixin: Behavior({
      created() {
        Object.defineProperty(this, 'parent', {
          get() {
            return this.getRelationNodes(path)[0];
          }
        });

        Object.defineProperty(this, 'index', {
          get() {
            return this.parent.children.indexOf(this);
          }
        })
      },
    })
  }
}

export function useChildren(
  name: string,
  onEffect?: (this) => void
) {
  const path = `../${name}/index`;

  return {
    relations: {
      [path]: {
        type: 'ancestor',
        linked(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
        linkChanged(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
        unlinked(this: TrivialInstance) {
          onEffect && onEffect.call(this);
        },
      } as RelationOption
    },
    mixin: Behavior({
      created() {
        Object.defineProperty(this, 'children', {
          get() {
            return this.getRelationNodes(path) || []
          }
        })
      }
    })
  }
}
