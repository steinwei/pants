import type { PropType } from 'vue'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | undefined

export const useCommon = () => {
  const props = () => {
    return {
      size: {
        type: String as PropType<Size>,
        default: 'md',
        validator: (value: string) => validators.size.includes(value),
      }
    }
  }

  const validators = Object.freeze({
    size: ['xs', 'sm', 'md', 'lg'],
  })

  return {
    props,
    validators,
  }
}
