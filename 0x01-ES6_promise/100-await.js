import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Call the uploadPhoto and createUser functions asynchronously
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    // Return an object with the responses from uploadPhoto and createUser
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
