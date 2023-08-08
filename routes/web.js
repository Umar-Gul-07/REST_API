import express from "express"

const router = express.Router()

import userController from "../controllers/userController.js"

router.get('/', userController.getAllDoc)
router.post('/', userController.createDoc)
router.get('/:id', userController.getSingleDocByID)
router.put('/:id', userController.updateDOcByID)
router.delete('/:id', userController.deleteDocByID)

export default router