
// FRONT END

function getRandom() {
  return fetch('/api/unsplash/random')
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