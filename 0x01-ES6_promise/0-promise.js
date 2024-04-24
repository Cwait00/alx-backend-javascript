export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API request with a 2-second delay
    setTimeout(() => {
      // Resolve the Promise with a sample response
      resolve({ status: 200, data: 'Success' });
    }, 2000);
  });
}
