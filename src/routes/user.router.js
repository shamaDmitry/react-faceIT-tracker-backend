import express from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/info', userController.getInfo);

export default router;
