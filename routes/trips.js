import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/



router.use(decodeUserFromToken)
router.get('/', checkAuth, tripsCtrl.index)
router.post('/:id/packingList', checkAuth, tripsCtrl.addPackingItem)
router.post('/:id/hotel', checkAuth, tripsCtrl.addHotel)
router.post('/:id/flight', checkAuth, tripsCtrl.addFlight)
router.post('/', checkAuth, tripsCtrl.create)
router.delete('/:tripId/packList/:itemId', checkAuth, tripsCtrl.deletePackingItem)
router.delete('/:tripId/flights/:flightId', checkAuth, tripsCtrl.deleteFlight)
router.delete('/:tripId/hotels/:hotelId', checkAuth, tripsCtrl.deleteHotel)
router.delete('/:id', checkAuth, tripsCtrl.delete)



export { router }