import { Link } from 'react-router-dom'


const Profile = ({user}) => {
  return (
    <main className="container">
      <h1 className="text">Profile page
      </h1>
        {user ? `hello${user}` :""}
        <Link to='/addTrip' >Add trip</Link>
        <Link to='/search' >search</Link>
    </main>
  )
}
 
export default Profile