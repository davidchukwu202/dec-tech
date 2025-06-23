import mongoose from 'mongoose';

const consultSchema = new mongoose.Schema(
  {
    fullName: String,
    phone: String,
    systemType: String,
    notes: String,
  },
  { timestamps: true }
);

const Consult = mongoose.model('Consult', consultSchema);

export default Consult;
