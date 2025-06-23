import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      {/* Service Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium capitalize">{service.category.replace('-', ' ')}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium">{service.duration} minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold text-lg text-blue-600">${service.price}</span>
          </div>
        </div>

        {service.features && (
          <div className="mb-4">
            <h4 className="font-medium mb-2">Includes:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-2">
          <Link 
            href={`/services/${service.slug}`}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          >
            Learn More
          </Link>
          <Link 
            href={`/appointments?service=${service.id}`}
            className="block w-full text-center border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
