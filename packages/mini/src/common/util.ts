function isType(type: string, target: never) {
  return Object.prototype.toString.call(undefined, target) === `[object ${type}]`
}

export {
  isType,
}
