// 5-typed_arrays.js
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  let buffer = new ArrayBuffer(length);
  let int8View = new Int8Array(buffer);
  int8View[position] = value;

  return new DataView(buffer);
}

export default createInt8TypedArray;
