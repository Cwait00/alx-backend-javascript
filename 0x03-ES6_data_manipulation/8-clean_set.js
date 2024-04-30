// 8-clean_set.js
function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    let result = '';
    for (const value of set) {
      if (typeof value === 'string' && value.startsWith(startString)) {
        result += `${result.length > 0 ? '-' : ''}${value.substring(startString.length)}`;
      }
    }
    return result;
  }
  return '';
}

export default cleanSet;
