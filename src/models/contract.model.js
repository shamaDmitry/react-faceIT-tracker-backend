import mongoose from 'mongoose';
import modelOptions from './model.options.js';

const contractSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    contractName: {
      type: String,
      required: true,
    },
    workedTime: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    memoText: {
      type: String,
    },
  },
  modelOptions
);

const contractModel = mongoose.model('Contract', contractSchema);

export default contractModel;
