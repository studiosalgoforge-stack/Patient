
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ElementType; // Icon component from lucide-react (e.g., Heart, Ambulance)
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
      <div className="bg-blue-100 text-blue-600 w-14 h-14 flex items-center justify-center rounded-full mb-4">
        <Icon size={30} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}