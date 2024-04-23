function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      // Resolve the Promise with some sample response data
      resolve("Sample API response data");
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
