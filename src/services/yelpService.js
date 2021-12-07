// import * as tokenService from '../services/tokenService'

function searchRestaurant(query) {
  console.log('yelp services', query)
  return fetch(`/api/restaurants/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}


export{
  searchRestaurant,
}