import responseHandler from '../handlers/response.handler.js';
import contractModel from '../models/contract.model.js';
import userModel from '../models/user.model.js';

const createContract = async (req, res) => {
  try {
    const { contractName, workedTime, clientName, userId } = req.body;

    const contract = new contractModel({
      contractName,
      workedTime,
      clientName,
      userId,
    });

    await contract.save();

    responseHandler.created(res, {
      contract,
    });
  } catch {
    responseHandler.error(res);
  }
};

const getAllContracts = async (req, res) => {
  try {
    const contracts = await contractModel.find({ userId: req.user.id });

    if (contracts) {
      return responseHandler.ok(res, contracts);
    }
  } catch {
    responseHandler.error(res);
  }
};

const getContract = async (req, res) => {
  try {
    const { contractId } = req.body;

    const contract = await contractModel.find({
      userId: req.user.id,
      id: contractId,
    });

    if (contract) {
      return responseHandler.ok(res, contract);
    }
  } catch {
    responseHandler.error(res);
  }
};

export default {
  createContract,
  getAllContracts,
  getContract,
};
