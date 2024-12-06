import mongoose from 'mongoose'

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  let DB_URI = '';

  if (process.env.NODE_ENV === "development") {
    DB_URI = process.env.DB_LOCAL_URI;  // استفاده از '=' به جای ':'
  }
  
  if (process.env.NODE_ENV === "production") {
    DB_URI = process.env.DB_URI;  // استفاده از '=' به جای ':'
  }
  
  await mongoose.connect(DB_URI).then((con)=>console.log('db connected'));

}

export default dbConnect;

