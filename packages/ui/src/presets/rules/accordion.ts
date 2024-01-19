import type { Rule } from '@unocss/core';
import type { Theme } from '../themes';

export const accordion: Rule<Theme>[] = [
  // ...
  ['p-accordion-wrapper', { display: 'flex' }],
  ['p-accordion-view', { display: 'flex' }],
  ['p-accordion-view-item', { display: 'flex', height: '0px' }],
]
