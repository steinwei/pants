export function isFunction(target: never) {
  return typeof target === 'function'
}

export function isObject(target: never) {
  return target && typeof target === 'object'
}
