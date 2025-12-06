"use client";

import React from "react";
import Image from "next/image";
import { HeartPulse, Users, Award, Stethoscope } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 ">

      {/* HERO SECTION */}
      <section className="relative bg-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Our Hospital</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Delivering trusted healthcare services with excellence, compassion, and innovation 
            for patients all over the world.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-700 opacity-10 rounded-br-[200px]"></div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a leading multi-specialty hospital providing world-class healthcare services. 
              Our dedicated team of doctors, nurses, and medical professionals works round the clock 
              to ensure patients get the best treatment and care.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong focus on innovation, advanced technologies, and ethical medical 
              practices, we have built a reputation for excellence over the years.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[380px]">
            <Image
              src="/images/about_us_main.png"
              alt="Hospital"
              fill
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white border-t border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <Users className="mx-auto mb-3 text-blue-600" size={40} />
            <h3 className="text-3xl font-bold">15k+</h3>
            <p className="text-gray-600">Patients Treated</p>
          </div>

          <div>
            <Stethoscope className="mx-auto mb-3 text-blue-600" size={40} />
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-gray-600">Medical Experts</p>
          </div>

          <div>
            <Award className="mx-auto mb-3 text-blue-600" size={40} />
            <h3 className="text-3xl font-bold">32+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>

          <div>
            <HeartPulse className="mx-auto mb-3 text-blue-600" size={40} />
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>

        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Mission & Values</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We aim to enhance human lives by providing innovative, compassionate, and comprehensive healthcare services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Compassion</h3>
            <p className="text-gray-600">Care that puts patients first with empathy and understanding.</p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">Using the latest medical technologies to provide advanced care.</p>
          </div>

          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">Delivering high-quality treatment with world-class standards.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
