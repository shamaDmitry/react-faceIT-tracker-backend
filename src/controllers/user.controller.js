// import userModel from "../models/user.model.js";
// import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler.js';

const getInfo = async (req, res) => {
  try {
    const user = {
      name: 'test',
      password: 'test',
    };

    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

export default {
  getInfo,
};
