import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      if (photo && photo.body && user && user.firstName && user.lastName) {
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
      }
    })
}

export default handleProfileSignup;
