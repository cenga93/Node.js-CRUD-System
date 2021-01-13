import express from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controller/UserController.js';
const router = express.Router();

// *****  | API  | **************************
router.post('/api/users', createUser);
router.get('/api/users', getUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

export default router;
