import axios from 'axios'



// BACK END
function randomPic(req,res) {
  console.log(process.env.UN_API);
  axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UN_API}`)
  .then(apiResponse => res.json(apiResponse.data))
  .catch(err => console.log(err, 'backend err'))
}

export {
  randomPic,
}