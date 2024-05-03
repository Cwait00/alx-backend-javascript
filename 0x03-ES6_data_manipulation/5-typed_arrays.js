function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length); // Use 'const' for buffer
  const int8View = new Int8Array(buffer); // Use 'const' for int8View
  int8View[position] = value;

  return new DataView(buffer);
}

export default createInt8TypedArray;
