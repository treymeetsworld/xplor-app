import axios from 'axios'


function getPhotos(req,res) {
  axios.get(`https://api.unsplash.com/search/photos?page=1&query=${req.params.query}`, { 
    headers: 
    {"Authorization": `Client-ID ${process.env.UN_API}`
  }})
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

function getRandomPhoto(req,res) {
  axios.get('https://api.unsplash.com/photos/random&client_id=721zpO5p8IAvT6tfwxOJJS15jxKPG8QIXgwISknO808')
  .then(randomResponse => {
    res.json(randomResponse.data)
  })
}






export {
  getPhotos,
  getRandomPhoto,
}