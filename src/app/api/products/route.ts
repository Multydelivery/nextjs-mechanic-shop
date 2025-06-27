import { NextRequest, NextResponse } from 'next/server';
import { Product } from '@/types';

// Mock products data - replace with database queries
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Motor Oil 5W-30',
    slug: 'premium-motor-oil-5w30',
    description: 'High-quality synthetic motor oil for optimal engine performance',
    price: 29.99,
    category: 'Oil & Fluids',
    imageUrl: '/images/products/motor-oil.jpg',
    inStock: true,
    brand: 'Mobil 1',
    rating: 4.8,
    reviewCount: 245
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
    brand: 'Brembo',
    rating: 4.9,
    reviewCount: 189
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
    brand: 'K&N',
    rating: 4.7,
    reviewCount: 156
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
    brand: 'NGK',
    rating: 4.6,
    reviewCount: 178
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
    brand: 'Interstate',
    rating: 4.5,
    reviewCount: 234
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    let filteredProducts = mockProducts;

    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search term
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.brand?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        page,
        limit,
        totalPages: Math.ceil(filteredProducts.length / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'price', 'category'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new product (mock - just return success for demo)
    const newProduct: Product = {
      id: Date.now().toString(),
      slug: body.name.toLowerCase().replace(/\s+/g, '-'),
      imageUrl: body.imageUrl || '/images/products/default.jpg',
      inStock: body.inStock ?? true,
      rating: 0,
      reviewCount: 0,
      ...body
    };

    // For demo purposes, just return the product without saving
    console.log('Creating product (demo mode):', newProduct);

    return NextResponse.json({
      success: true,
      data: newProduct
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
