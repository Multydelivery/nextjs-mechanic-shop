import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

// Mock data - using placeholder images for demo
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Motor Oil 5W-30',
    slug: 'premium-motor-oil-5w30',
    description: 'High-quality synthetic motor oil for optimal engine performance',
    price: 29.99,
    category: 'Oil & Fluids',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'Mobil 1'
  },
  {
    id: '2',
    name: 'Brake Pads Set',
    slug: 'brake-pads-set',
    description: 'Premium ceramic brake pads for superior stopping power',
    price: 79.99,
    category: 'Brakes',
    imageUrl: 'https://images.unsplash.com/photo-1605459173815-a7103e87c7c5?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'Brembo'
  },
  {
    id: '3',
    name: 'Air Filter',
    slug: 'air-filter',
    description: 'High-flow air filter for improved engine performance',
    price: 24.99,
    category: 'Filters',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'K&N'
  },
  {
    id: '4',
    name: 'Spark Plugs Set (4pc)',
    slug: 'spark-plugs-set',
    description: 'Platinum spark plugs for reliable ignition and fuel efficiency',
    price: 39.99,
    category: 'Engine',
    imageUrl: 'https://images.unsplash.com/photo-1596813276536-09b06b97e3e5?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'NGK'
  },
  {
    id: '5',
    name: 'Car Battery 12V',
    slug: 'car-battery-12v',
    description: 'Maintenance-free automotive battery with 3-year warranty',
    price: 149.99,
    category: 'Electrical',
    imageUrl: 'https://images.unsplash.com/photo-1609037342757-a0ec9db6ad2b?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'Interstate'
  },
  {
    id: '6',
    name: 'Windshield Wipers Set',
    slug: 'windshield-wipers',
    description: 'All-weather windshield wipers for clear visibility',
    price: 19.99,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'Rain-X'
  },
  {
    id: '7',
    name: 'Tire Pressure Gauge',
    slug: 'tire-pressure-gauge',
    description: 'Digital tire pressure gauge with LED display',
    price: 12.99,
    category: 'Tools',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'AstroAI'
  },
  {
    id: '8',
    name: 'Coolant Antifreeze',
    slug: 'coolant-antifreeze',
    description: 'Extended life coolant for all-season protection',
    price: 22.99,
    category: 'Oil & Fluids',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    inStock: false,
    brand: 'Prestone'
  },
  {
    id: '9',
    name: 'Jumper Cables',
    slug: 'jumper-cables',
    description: 'Heavy-duty 12-foot jumper cables with carrying case',
    price: 34.99,
    category: 'Emergency',
    imageUrl: 'https://images.unsplash.com/photo-1609037342757-a0ec9db6ad2b?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'CARTMAN'
  },
  {
    id: '10',
    name: 'Floor Mats Set',
    slug: 'floor-mats-set',
    description: 'All-weather rubber floor mats for front and rear',
    price: 45.99,
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'WeatherTech'
  },
  {
    id: '11',
    name: 'LED Headlight Bulbs',
    slug: 'led-headlight-bulbs',
    description: 'Ultra-bright LED headlight conversion kit',
    price: 89.99,
    category: 'Lighting',
    imageUrl: 'https://images.unsplash.com/photo-1605459173815-a7103e87c7c5?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'SEALIGHT'
  },
  {
    id: '12',
    name: 'Car Jack 2-Ton',
    slug: 'car-jack-2ton',
    description: 'Hydraulic floor jack with safety valve',
    price: 129.99,
    category: 'Tools',
    imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    inStock: true,
    brand: 'Torin'
  }
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Auto Parts & Accessories</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Quality parts and accessories for all your automotive needs
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
