import ServiceCard from '@/components/ServiceCard';
import { Service, ServiceCategory } from '@/types';

// Mock data - replace with API call
const services: Service[] = [
  {
    id: '1',
    name: 'Oil Change Service',
    slug: 'oil-change',
    description: 'Complete oil change with premium motor oil and filter replacement',
    duration: 30,
    price: 49.99,
    category: ServiceCategory.MAINTENANCE,
    isActive: true,
    features: ['Premium Oil', 'Filter Replacement', 'Multi-point Inspection']
  },
  {
    id: '2',
    name: 'Brake Inspection & Repair',
    slug: 'brake-service',
    description: 'Comprehensive brake system inspection and repair services',
    duration: 90,
    price: 159.99,
    category: ServiceCategory.REPAIR,
    isActive: true,
    features: ['Brake Pad Inspection', 'Rotor Check', 'Brake Fluid Test']
  },
  {
    id: '3',
    name: 'Engine Diagnostics',
    slug: 'engine-diagnostics',
    description: 'Advanced computer diagnostics to identify engine issues',
    duration: 60,
    price: 129.99,
    category: ServiceCategory.ENGINE,
    isActive: true,
    features: ['OBD Scan', 'Error Code Analysis', 'Performance Check']
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Professional automotive services to keep your vehicle running smoothly
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
