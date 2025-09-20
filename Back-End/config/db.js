import mongoose from 'mongoose';
export const connectDB = async () => {
  try {
   const connection = await mongoose.connect(process.env.MONGO_URI)
   console.log(`MongoDB connected: ${connection.connection.host}`);
  }
    catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); //1 code means code exit with error and 0 means code exit without error(success)
  }
}
