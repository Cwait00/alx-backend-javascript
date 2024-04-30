// 8-clean_set.js
function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  return [...set]
    .filter(item => typeof item === 'string' && item.startsWith(startString))
    .map(item => item.slice(startString.length))
    .join('-');
}

export default cleanSet;
