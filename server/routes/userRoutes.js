import express from 'express';
import { createUser, getAllUser, getUserById, updateTask, deleteUser} from '../controllers/userController.js';

const router = express.Router()

router.post("/create", createUser)
router.get('/getAll', getAllUser)
router.get('/:id', getUserById)

//update tasks
router.patch("/:uniqueCode", updateTask)

//delete user
router.delete('/:id', deleteUser)

export {router as userRoutes}