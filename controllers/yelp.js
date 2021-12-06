import axios from 'axios'


function searchRestaurants(req,res) {
  console.log(req.params.query)
  axios.get(`https://api.yelp.com/v3/businesses/${req.params.query}`,{
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`, 'Content-Type': 'application/json'
  },
  })
  .then(apiResponse => res.json(apiResponse.data))
}

function getRestaurants(req,res) {
  axios.get(`https://api.yelp.com/v3/businesses/{id}`)
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err => console.log(err, 'backend err'))
}

export {
  searchRestaurants,
  getRestaurants
}