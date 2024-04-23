import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions with provided arguments
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  // Wait for both promises to settle
  return Promise.allSettled([promise1, promise2]).then(results => {
    // Construct array containing objects with status and value or error
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
