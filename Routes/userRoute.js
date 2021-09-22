import express from 'express';
import {createUser, listAllUsers, getUserById, updateUserById, deleteUserById} from '../Controllers/userController'

const router = express.Router()


router.route('/users').post(createUser)
router.route('/users').get(listAllUsers)
router.route('/users/:id').get(getUserById)
router.route('/users/:id').put(updateUserById)
router.route('/users/:id').delete(deleteUserById)


export default router;