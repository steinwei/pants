function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while(v1.length < len) {
    v1.push('0');
  }
  while(v2.length < len) {
    v2.push('0');
  }

  for(let i=0; i<len; i++) {
    const num1 = Number(v1[i]);
    const num2 = Number(v2[i]);

    if (num1 > num2) {
      return true;
    }
    if (num1 < num2) {
      return false;
    }
  }

  return false;
}

function compareSDKVersion(version: string) {
  const system = getSystemInfoSync();

  return compareVersion(system.SDKVersion, version);
}

export {
  compareVersion,
  compareSDKVersion,
}
