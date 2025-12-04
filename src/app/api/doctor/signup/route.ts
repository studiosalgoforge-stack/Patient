import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Doctor } from "@/lib/model/Doctor";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("🔥 Signup API hit");

    await connectDB();
    console.log("⚡ DB connected");

    const body = await req.json();
    console.log("📩 Received body:", body);

    const { name, email, password } = body;

    if (!name || !email || !password) {
      console.log("❌ Missing fields");
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const exists = await Doctor.findOne({ email });
    console.log("👀 Existing doctor:", exists);

    if (exists) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    console.log("🔐 Password hashed");

    await Doctor.create({ name, email, password: hashed });

    console.log("✅ Doctor created");

    return NextResponse.json({ message: "Doctor registered successfully" });
  } catch (err: any) {
    console.log("💥 ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
