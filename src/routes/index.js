import express from 'express';
import responseHandler from '../handlers/response.handler.js';
import userRouter from './user.router.js';
import contractRouter from './contract.router.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/contract', contractRouter);

router.use('/test', async (req, res) =>
  responseHandler.ok(res, { msg: 'test' })
);

export default router;
