export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  brand?: string;
  specifications?: Record<string, string>;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: ServiceCategory;
  imageUrl?: string;
  isActive: boolean;
  features?: string[];
  rating?: number;
  reviewCount?: number;
  estimatedTime?: string;
  warranty?: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  vehicleInfo: VehicleInfo;
  appointmentDate: Date;
  status: AppointmentStatus;
  notes?: string;
  totalPrice: number;
  estimatedDuration?: number;
  assignedTechnician?: string;
  completedAt?: Date;
}

export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  mileage?: number;
  vin?: string;
  engine?: string;
  transmission?: string;
  color?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt?: Date;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: Date;
  paymentMethod: string;
  shippingMethod?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  notes?: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
  };
  preferences?: {
    newsletter: boolean;
    smsNotifications: boolean;
    emailNotifications: boolean;
  };
}

export interface Review {
  id: string;
  productId?: string;
  serviceId?: string;
  customerId: string;
  customerName: string;
  rating: number; // 1-5
  title: string;
  comment: string;
  createdAt: Date;
  verified: boolean;
  helpful?: number;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  isActive: boolean;
  sortOrder: number;
  productCount?: number;
}

export interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialties: ServiceCategory[];
  certifications: string[];
  experience: number; // years
  rating?: number;
  isActive: boolean;
  avatar?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  serviceType?: string;
  status: ContactStatus;
  createdAt: Date;
  respondedAt?: Date;
  response?: string;
}

export interface Inventory {
  id: string;
  productId: string;
  quantity: number;
  minStock: number;
  maxStock: number;
  location: string;
  lastUpdated: Date;
  supplier?: string;
  cost: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  applicableProducts?: string[];
  applicableServices?: string[];
  minOrderAmount?: number;
  maxUses?: number;
  currentUses: number;
}

export enum ServiceCategory {
  MAINTENANCE = 'maintenance',
  REPAIR = 'repair',
  INSPECTION = 'inspection',
  TIRE_SERVICE = 'tire-service',
  ELECTRICAL = 'electrical',
  ENGINE = 'engine',
  TRANSMISSION = 'transmission',
  BRAKE_SERVICE = 'brake-service',
  AC_HEATING = 'ac-heating',
  SUSPENSION = 'suspension',
  EXHAUST = 'exhaust'
}

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no-show',
  RESCHEDULED = 'rescheduled'
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned',
  REFUNDED = 'refunded'
}

export enum ContactStatus {
  NEW = 'new',
  IN_PROGRESS = 'in-progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
  CASH = 'cash',
  CHECK = 'check',
  PAYPAL = 'paypal',
  FINANCING = 'financing'
}

export enum ShippingMethod {
  STANDARD = 'standard',
  EXPRESS = 'express',
  OVERNIGHT = 'overnight',
  PICKUP = 'pickup'
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Search and Filter Types
export interface SearchFilters {
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  rating?: number;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export interface ServiceFilters {
  category?: ServiceCategory;
  priceMin?: number;
  priceMax?: number;
  duration?: number;
  rating?: number;
}
