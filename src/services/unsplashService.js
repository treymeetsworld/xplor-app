
// FRONT END

function getRandom(query) {
  return fetch(`/api/unsplash/random/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}


function searchUnsplash(query) {
  return fetch(`/api/unsplash/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}

export{
  getRandom,
  searchUnsplash
}