import axios from 'axios'



function getRandom(req,res) {
  axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UN_API}`)
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err => console.log(err, 'backend err'))
}

function searchUnsplash(req,res) {
  axios.get(`https://api.unsplash.com/search/photos?query=${req.params.query}&client_id=${process.env.UN_API}`)
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err => console.log(err, 'backend err'))
}

export {
  getRandom,
  searchUnsplash,
}


