import responseHandler from '../handlers/response.handler.js';

const createContract = async (req, res) => {
  try {
    const { contractName, workedTime } = req.body;

    console.log('req.body', req.body);
  } catch {
    responseHandler.error(res);
  }
};

export default {
  createContract,
};
