"use client";

import React from "react";
import { HeartPulse, Ambulance, Stethoscope, Brain, Baby, Microscope, ShieldCheck } from "lucide-react";

const servicesList = [
  { icon: Ambulance, title: "Emergency Care", desc: "24/7 emergency response with advanced life-support systems." },
  { icon: Baby, title: "Pediatrics", desc: "Dedicated care for infants, children, and adolescents." },
  { icon: Brain, title: "Neurology", desc: "Diagnosis & treatment for neurological disorders." },
  { icon: HeartPulse, title: "Cardiology", desc: "Comprehensive heart care with expert specialists." },
  { icon: Microscope, title: "Laboratory", desc: "Accurate and fast medical testing with modern equipment." },
  { icon: ShieldCheck, title: "General Checkup", desc: "Full health screening & preventive care." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-blue-800 text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Medical Services</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            We offer a wide range of medical treatments with world-class care and modern technology.
          </p>
        </div>

        <div className="absolute inset-0 bg-blue-800 opacity-10 rounded-bl-[200px]"></div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {servicesList.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <item.icon size={50} className="text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose Our Hospital?</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-12">
            We combine expertise, cutting-edge technology, and compassionate care to deliver the best patient outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Experienced Specialists</h3>
              <p className="text-gray-600">Our doctors are leaders in their fields.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">World-class technology & treatment methods.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Patient-First Care</h3>
              <p className="text-gray-600">We provide compassionate and personalized healthcare.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
