import { Router } from 'express'
import * as attractionsCtrl from '../controllers/attractions.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:query',  attractionsCtrl.getAttractions )

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:id', checkAuth, attractionsCtrl.addAttraction)


export { router }