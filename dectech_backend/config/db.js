import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      ssl: true,
    });
    console.log('Mongodb connected');
  } catch (error) {
    console.error('Mongodb failed to connect', error.message);
    process.exit(1);
  }
};

export default connectDB;
