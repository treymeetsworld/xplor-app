import React, { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import Profile from '../Profile/Profile'
import * as authService from '../../services/authService'
import TripForm from '../../components/TripForm/TripForm'
import { createTrip, getTrips, deleteTrip, updateTrip} from '../../services/tripService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [trips, setTrips] = useState([])
	const navigate = useNavigate()

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		navigate('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	const handleCreateTrip = tripData => {
		createTrip(tripData)
		.then(newTrip => setTrips([...trips, newTrip]))
	}
	
	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} /	
				<Route path='/profile' element={user ? <Profile/> : <Navigate to='/signup' />} />
				<Route path='/addTrip' element={<TripForm  handleCreateTrip={handleCreateTrip} />} />
			</Routes>
		</>
	);
}

export default App;