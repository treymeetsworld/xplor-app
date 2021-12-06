import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/trips'

function getTrips() {
    return fetch(BASE_URL, {
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
        .then(res => res.json())
}

function createTrip(formData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
}

function addPackingItem(newItemData) {
    return fetch(`${BASE_URL}/${newItemData.trip}/packingList`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItemData)
    })
        .then(res => res.json())
}

function deletePackingItem(id) {
    return fetch(`${BASE_URL}/${id}/packingList`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
        .then(res => res.json())
}

function addHotel(newHotelData) {
    return fetch(`${BASE_URL}/${newHotelData.trip}/hotel`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHotelData)
    })
        .then(res => res.json())
}

function addFlight(newFlightData) {
    return fetch(`${BASE_URL}/${newFlightData.trip}/flight`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFlightData)
    })
        .then(res => res.json())
}

function updateTrip(formData) {
    return fetch(`${BASE_URL}/${formData.id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
}

function deleteTrip(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
        .then(res => res.json())
}

export {

    getTrips,
    createTrip,
    updateTrip,
    deleteTrip,
    addPackingItem,
    deletePackingItem,
    addHotel,
    addFlight,
}

