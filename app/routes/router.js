import express from 'express';
import { home, addUserPage, editUserPage } from '../controller/pagesController.js';
const router = express.Router();

/**
 * @description ROOT
 * @method GET /
 */
router.get('/', home);

/**
 * @description ADD USER
 * @method GET /add-user
 */
router.get('/add-user', addUserPage);

/**
 * @description EDIT USER
 * @method GET /edit-user
 */
router.get('/edit-user', editUserPage);

export default router;
