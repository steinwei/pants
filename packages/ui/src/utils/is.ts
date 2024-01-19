export function isFunction(target: never) {
  return typeof target === 'function'
}

export function isObject(target: never) {
  return target && typeof target === 'object'
}

export function isArray(target: never) {
  return Array.isArray(target)
}

export function isNil(target: never) {
  return target === null || target === undefined
}

export function isString(target: never) {
  return typeof target === 'string'
}

export function isBoolean(target: never) {
  return typeof target === 'boolean'
}

export function isNumber(target: never) {
  return typeof target === 'number'
}

export function isType(type: string, target: never) {
  return Object.prototype.toString(undefined, target) === `[object ${type}]`
}
