"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image for the doctor photo and logo
import Link from "next/link"; // Import Link for the "Forgot Password" link
import { Button } from "@/components/ui/button";
// We no longer need Card/CardHeader/CardContent as we use custom divs for the layout
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, KeyRound } from "lucide-react"; // Updated icons
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (res?.error) {
      toast.error(res.error || "Invalid credentials. Please try again.");
      return;
    }

    toast.success("Logged in successfully! Redirecting to dashboard...");

    setTimeout(() => router.push("/dashboard"), 1000);
  }

  return (
    // Main Container: Centered, fills screen, and uses a subtle background color
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      
      {/* Login Box Container: Large container with the two columns */}
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-row">
        
        {/* === LEFT SIDEBAR (Image and Promo) === */}
        <div className="hidden lg:block lg:w-1/2 relative">
          
          {/* Top Half: Doctor Image */}
          <div className="h-2/3 relative">
            <Image
              src="/images/doctor_login_hero1.jpeg" // 👈 Replace with your doctor image path (e.g., in public/images)
              alt="Smiling doctor ready to assist"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              priority // Prioritize loading the hero image
            />
          </div>

          {/* Bottom Half: Dark Blue Promo */}
          <div className="h-1/3 bg-blue-700 p-8 text-white flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              {/* Placeholder for Invision Logo/Icon */}
              {/* <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-700" /> 
              </div> */}
              {/* <span className="text-xl font-semibold">Invision</span> */}
            </div>
            
            <h2 className="text-3xl font-bold mb-3">
              Welcome to Hospital Management System
            </h2>
            <p className="text-sm text-blue-100">
              Cloud Based Streamline Hospital Management system with centralized user friendly platform
            </p>
          </div>
        </div>

        {/* === RIGHT SIDE (Login Form) === */}
        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
          
          {/* Logo/Title */}
          {/* <div className="flex items-center space-x-2 mb-10">
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" /> 
            </div>
            <span className="text-2xl font-semibold text-blue-700">Invision</span>
          </div> */}
          
          <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
          <p className="text-gray-500 mb-8 text-sm">
            Enter your credentials to login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example.healthcare@gmail.com"
                className="mt-1 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                className="mt-1 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full mt-4 h-12 bg-blue-600 hover:bg-blue-700 text-lg"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don&lsquo;t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-blue-600 cursor-pointer hover:underline font-medium"
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
}