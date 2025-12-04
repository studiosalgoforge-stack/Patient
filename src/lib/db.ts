import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI!;

if (!MONGO_URL) throw new Error("MongoDB connection string missing");

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: "PatientManagementSystem",
    });

  cached.conn = await cached.promise;
  return cached.conn;
}
