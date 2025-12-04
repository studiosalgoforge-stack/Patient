import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Doctor } from "@/lib/model/Doctor";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const doctor = await Doctor.findOne({ email });
    if (!doctor) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch)
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });

    return NextResponse.json({ message: "Login successful" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
