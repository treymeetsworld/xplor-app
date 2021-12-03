


function getPhotos(query) {
  return fetch(`/api/unsplash/${query}`)
  .then(res => res.json())
}


function getRandomPhoto() {
  fetch(`/api/unsplash/random`)
  .then(res => res.json())
}


export {
  getPhotos,
  getRandomPhoto
}