
function searchRestaraunt(query) {
  console.log('yelp services', query)
  return fetch(`/api/yelp/${query}`)
  .then(res => res.json())
  .catch(err => console.log(err, 'frontend err'))
}


export{
  searchRestaraunt,
}