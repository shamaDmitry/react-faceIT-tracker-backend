import express from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller.js';
import requestHandler from '../handlers/request.handler.js';
import tokenMiddleware from '../middlewares/token.middleware.js';
import userModel from '../models/user.model.js';

const router = express.Router();

router.post(
  '/signup',
  body('username')
    .exists()
    .withMessage('username is required')
    .isLength({ min: 3 })
    .withMessage('username minimum 3 characters'),
  body('email')
    .exists()
    .withMessage('email is required')
    .custom(async value => {
      const user = await userModel.findOne({ email: value });
      if (user) return Promise.reject('email already used');
    }),
  body('password')
    .exists()
    .withMessage('password is required')
    .isLength({ min: 5 })
    .withMessage('password minimum 5 characters'),
  requestHandler.validate,
  userController.signup
);

router.post(
  '/signin',
  body('email').exists().withMessage('email is required').trim().isEmail(),
  body('password')
    .exists()
    .withMessage('password is required')
    .isLength({ min: 5 })
    .withMessage('password minimum 5 characters'),
  requestHandler.validate,
  userController.signin
);

router.get('/info', userController.getInfo);

router.get('/test', tokenMiddleware.auth, userController.getTest);

export default router;
