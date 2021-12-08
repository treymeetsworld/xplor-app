import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:query',  restaurantsCtrl.searchRestaurants )

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/', checkAuth, restaurantsCtrl.index)
router.post('/:id', checkAuth, restaurantsCtrl.addRestaurant)

export { router }