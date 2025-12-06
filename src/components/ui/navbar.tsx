
import Link from 'next/link';
import { Phone, Mail, Menu, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

export default function navbar() {
  return (
    <header className=" w-full bg-white shadow-md z-10">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200"><Facebook size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Twitter size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Instagram size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Globe size={16} /></a>
          </div>
          <div className="flex space-x-6">
            <a href="tel:+120-556-5523" className="flex items-center hover:text-blue-200">
              <Phone size={16} className="mr-1" /> +120-556-5523
            </a>
            <a href="#" className="flex items-center hover:text-blue-200">
              <Globe size={16}  className="mr-1" /> 09:00 - 20:00 Everyday 
            </a>
            <a href="mailto:support@example.com" className="flex items-center hover:text-blue-200">
              <Mail size={16} className="mr-1" /> support@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Hospital Management
        </Link>
        <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium">
          {['Home', 'About', 'Services', 'login'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-blue-600 transition duration-150">
              {item}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden text-gray-700">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}