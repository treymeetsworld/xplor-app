import { Router } from 'express'
import * as attractionsCtrl from '../controllers/attractions.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, attractionsCtrl.index)

export { router }