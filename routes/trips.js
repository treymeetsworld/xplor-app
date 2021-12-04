import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, tripsCtrl.index)
router.post('/:id/packingList', checkAuth, tripsCtrl.addPackingItem)
router.post('/', checkAuth, tripsCtrl.create)
router.delete('/:id', checkAuth, tripsCtrl.delete)

export { router }