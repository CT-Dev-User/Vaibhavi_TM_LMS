import mongoose from 'mongoose';

let isConnected = false; // 🔁 Cache the connection

export const conn = async () => {
  if (isConnected) {
    console.log('✅ MongoDB already connected');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB);
    isConnected = db.connections[0].readyState;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ DB connection failed:', error);
    throw error;
  }
};
