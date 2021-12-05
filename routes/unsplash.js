import { Router } from 'express'
import * as unsplashCtrl from '../controllers/unsplash.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/random', unsplashCtrl.randomPic )

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// router.get('/:query', checkAuth, unsplashCtrl.getPhotos)
// router.get('/random', checkAuth, unsplashCtrl.getRandomPhoto)

export { router }