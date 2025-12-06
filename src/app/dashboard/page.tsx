// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, UserPlus, FileText, Activity, HeartPulse, Stethoscope, ChevronRight } from "lucide-react";

// --- PLACEHOLDER COMPONENTS (Define these in your actual components folder later) ---

// Component for the main welcome banner with enhanced styling
const WelcomeBanner = ({ userName }: { userName: string }) => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 md:p-8 rounded-xl shadow-lg flex items-center justify-between mb-8">
    <div className="flex items-center space-x-4">
      <Stethoscope size={40} className="text-blue-100" />
      <div>
        <h1 className="text-3xl font-bold">Welcome Back, Dr. {userName}!</h1>
        <p className="text-blue-100">Your dashboard provides an overview of patient activity and trends.</p>
      </div>
    </div>
  </div>
);

// Reusable component for displaying key metrics
const StatCard = ({ title, value, icon: Icon, colorClass }: { title: string; value: string; icon: React.ElementType; colorClass: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 hover:shadow-lg transition duration-300" style={{ borderColor: colorClass }}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">{value}</h2>
      </div>
      <div className={`p-3 rounded-full ${colorClass} text-white bg-opacity-10`} style={{ backgroundColor: colorClass, opacity: 0.1 }}>
        <Icon size={24} className={`opacity-100`} style={{ color: colorClass }} />
      </div>
    </div>
  </div>
);

// Component for Chart/Visualization Placeholder
const ChartComponent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl shadow-md h-full">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-lg">
      {children}
    </div>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) redirect("/login");

  // Mock Data (Replace with your actual API calls later)
  const stats = [
    { title: "Total Patients", value: "1,250", icon: Users, colorClass: "#3b82f6" }, // Blue
    { title: "Today's Appointments", value: "15", icon: Activity, colorClass: "#10b981" }, // Green
    { title: "Critical Cases", value: "8", icon: HeartPulse, colorClass: "#ef4444" }, // Red
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col space-y-4">
        <div className="text-2xl font-bold text-blue-600 mb-6">
          PMS Dashboard
        </div>
        
        {/* Navigation Links */}
        <Link href="/dashboard/add-patient" passHref>
          <div className="flex items-center space-x-3 p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition cursor-pointer">
            <UserPlus size={20} />
            <span className="font-medium">Add New Patient</span>
          </div>
        </Link>
        
        <Link href="/dashboard/view-patients" passHref>
          <div className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer">
            <FileText size={20} />
            <span className="font-medium">View All Patients</span>
          </div>
        </Link>

        {/* Placeholder for other links (e.g., Profile, Settings) */}
        <hr className="border-gray-200 mt-4" />
        <Link href="/dashboard/profile" passHref>
            <div className="flex items-center justify-between p-3 rounded-lg text-gray-500 hover:bg-gray-100 transition cursor-pointer">
                <span>Profile</span>
                <ChevronRight size={16} />
            </div>
        </Link>
        
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        
        {/* 1. Welcome Session */}
        <WelcomeBanner userName={session.user?.name || "Doctor"} />

        {/* 2. Total Patients Div Cards (Stats Overview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* 3. Patient Data Distribution (Charts/Components) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Patient Age Wise Component */}
          <ChartComponent title="Patient Distribution by Age Group">
            <p>Age distribution chart placeholder (e.g., Bar Chart)</p>
          </ChartComponent>

          {/* Patient Disease Wise Component */}
          <ChartComponent title="Top 5 Disease Categories">
            <p>Disease distribution chart placeholder (e.g., Pie Chart)</p>
          </ChartComponent>

        </div>
        
      </div>
    </div>
  );
}