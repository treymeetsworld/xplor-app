
// FRONT END

function randomPic() {
  return fetch('/api/unsplash/random')
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}


export{
  randomPic
}