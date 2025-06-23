'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

// Custom Shopping Cart Icon Component
const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 6h.01M15 19h.01" 
    />
  </svg>
);

// Custom Menu Icon Component
const MenuIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

// Custom Close Icon Component
const CloseIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

export default function Navbar() {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            AutoShop Pro
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Products
            </Link>
            <Link href="/appointments" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Book Appointment
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart" className="relative hover:text-blue-600 transition">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/products" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/appointments" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
