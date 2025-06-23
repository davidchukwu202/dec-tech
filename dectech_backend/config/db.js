import mongoose from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb connected');
  } catch (error) {
    console.error('Mongodb failed to connect', err.message);
    process.exit(1);
  }
};
