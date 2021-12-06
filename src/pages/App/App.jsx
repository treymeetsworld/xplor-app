import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import TripDetails from '../TripDetails/TripDetails'
import Profile from '../Profile/Profile'
import Unsplash from '../Unsplash/Unsplash'
import * as authService from '../../services/authService'
import TripForm from '../../components/TripForm/TripForm'
import { createTrip , getTrips, addPackingItem, deleteTrip, addHotel, addFlight } from '../../services/tripService'

const App = () => {
	const [user, setUser] = useState(authService.getUser())
	const [trips, setTrips] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		getTrips()
			.then(trips => setTrips(trips))
	}, [])

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
	
	const handleAddPackingItem = newItemData => {
		addPackingItem(newItemData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleAddHotel = newHotelData => {
		addHotel(newHotelData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleAddFlight = newFlightData => {
		addFlight(newFlightData)
		.then(updatedTripData => {
			console.log('front-end new trip', updatedTripData)
			const updatedTrips = trips.map(trip => trip.App_id === updatedTripData._id ? updatedTripData : trip)
			setTrips(updatedTrips)
			navigate('/tripDetails', {state: updatedTripData})
		})
	}

	const handleDeleteTrip = id => {
		deleteTrip(id)
			.then(deletedTrip => {
				setTrips(trips.filter(trip => trip._id !== deletedTrip._id))
				navigate('/profile', {state: trips})
			})
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route path='/' element={<Landing user={user} />} />
				<Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route path='/users' element={user ? <Users /> : <Navigate to='/login' />} />	
				<Route path='/profile' element={user ? <Profile handleDeleteTrip={handleDeleteTrip} user={user} trips={trips}/> : <Navigate to='/signup' />} />
				<Route path='/addTrip' element={<TripForm  handleCreateTrip={handleCreateTrip} />} />
				<Route path='/search' element={<Unsplash />} />
				<Route path='/tripDetails' element={<TripDetails handleAddPackingItem={handleAddPackingItem} handleAddHotel={handleAddHotel} handleAddFlight={handleAddFlight}/>} />
			</Routes>
		</>
	);
}

export default App;