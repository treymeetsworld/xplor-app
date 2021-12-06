import { Router } from 'express'
import * as yelpCtrl from '../controllers/yelp.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/:query', yelpCtrl.searchRestaurants )

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/:query', checkAuth, unsplashCtrl.getPhotos)
// router.get('/random', checkAuth, unsplashCtrl.getRandomPhoto)

export { router }