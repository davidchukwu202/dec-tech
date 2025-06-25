import mongoose from 'mongoose';

const consultSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Consult = mongoose.model('Consult', consultSchema);

export default Consult;
