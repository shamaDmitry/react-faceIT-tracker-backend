import express from 'express';
import { body } from 'express-validator';
import contractController from '../controllers/contract.controller.js';
import requestHandler from '../handlers/request.handler.js';
import tokenMiddleware from '../middlewares/token.middleware.js';
import userModel from '../models/user.model.js';

const router = express.Router();

router.post(
  '/create',
  tokenMiddleware.auth,
  body('contractName').exists().withMessage('contractName is required'),
  body('workedTime').exists().withMessage('workedTime is required'),
  body('userId')
    .exists()
    .withMessage('userId is required')
    .custom(async value => {
      const user = await userModel.findOne({ _id: value });
      if (!user) return Promise.reject('no user with this id');
    }),
  requestHandler.validate,
  contractController.createContract
);

router.get('/list', tokenMiddleware.auth, contractController.getAllContracts);

router.get('/:id', tokenMiddleware.auth, contractController.getContract);

export default router;
