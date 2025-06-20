import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);            // Create user profile
router.get('/', getUsers);              // Get all users
router.get('/:id', getUserById);        // Get single user
router.put('/:id', updateUser);         // Update user
router.delete('/:id', deleteUser);      // Delete user

export default router;
