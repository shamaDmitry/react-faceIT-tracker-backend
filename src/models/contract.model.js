import mongoose from 'mongoose';
import modelOptions from './model.options.js';

const contractSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    contractName: {
      type: String,
      required: true,
    },
    workedTime: {
      type: String,
      required: true,
    },
  },
  modelOptions
);

const contractModel = mongoose.model('Contract', contractSchema);

export default contractModel;
