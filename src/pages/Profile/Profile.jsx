import { Link } from 'react-router-dom'
import TripForm from '../../components/TripForm/TripForm'

const Profile = ({user}) => {
  return (
    <main className="container">
      <h1 className="text">Profile page
      </h1>
        {user ? `hello${user}` :""}
        <Link to='/tripForm' >Add trip</Link>
    </main>
  )
}
 
export default Profile