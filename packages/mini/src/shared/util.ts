function isType(type: string, target: never): Boolean {
  return Object.prototype.toString.call(target) === `[object ${type}]`;
}

export {
  isType,
}
