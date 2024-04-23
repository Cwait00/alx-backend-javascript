export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Reject the promise with an error message including the filename
    reject(new Error(`${filename} cannot be processed`));
  });
}
