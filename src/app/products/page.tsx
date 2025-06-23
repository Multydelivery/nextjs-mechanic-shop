import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

// Mock data - replace with API call
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Motor Oil 5W-30',
    slug: 'premium-motor-oil-5w30',
    description: 'High-quality synthetic motor oil for optimal engine performance',
    price: 29.99,
    category: 'Oil & Fluids',
    imageUrl: '/images/products/motor-oil.jpg',
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
    imageUrl: '/images/products/brake-pads.jpg',
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
    imageUrl: '/images/products/air-filter.jpg',
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
    imageUrl: '/images/products/spark-plugs.jpg',
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
    imageUrl: '/images/products/car-battery.jpg',
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
    imageUrl: '/images/products/wipers.jpg',
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
    imageUrl: '/images/products/pressure-gauge.jpg',
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
    imageUrl: '/images/products/coolant.jpg',
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
    imageUrl: '/images/products/jumper-cables.jpg',
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
    imageUrl: '/images/products/floor-mats.jpg',
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
    imageUrl: '/images/products/led-headlights.jpg',
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
    imageUrl: '/images/products/car-jack.jpg',
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
