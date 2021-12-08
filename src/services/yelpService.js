

function searchRestaurant(query) {
  return fetch(`/api/restaurants/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}

function getAttractions(query) {
  return fetch(`/api/attractions/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}

export{
  searchRestaurant,
  getAttractions,
}