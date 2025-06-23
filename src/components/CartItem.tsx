'use client';

import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const [isRemoving, setIsRemoving] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove();
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
    }, 150);
  };

  return (
    <div className={`transition-all duration-150 ${isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col sm:hidden space-y-3 py-4 border-b border-gray-200 last:border-b-0">
        <div className="flex items-start space-x-3">
          <Link href={`/products/${product.slug}`}>
            <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
          </Link>
          
          <div className="flex-grow min-w-0">
            <Link 
              href={`/products/${product.slug}`}
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition block"
            >
              {product.name}
            </Link>
            
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
            
            {product.brand && (
              <span className="text-xs text-gray-500">Brand: {product.brand}</span>
            )}
          </div>

          <button
            onClick={handleRemove}
            className="text-red-600 hover:text-red-700 p-1 transition flex-shrink-0"
            title="Remove from cart"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
              disabled={!product.inStock}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="w-8 text-center font-medium text-sm">{quantity}</span>
            
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
              disabled={!product.inStock}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            {quantity > 1 && (
              <div className="text-xs text-gray-500">
                ${(product.price * quantity).toFixed(2)} total
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Link href={`/products/${product.slug}`}>
            <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <Link 
            href={`/products/${product.slug}`}
            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition"
          >
            {product.name}
          </Link>
          
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          
          <div className="flex items-center space-x-4 mt-2">
            {product.brand && (
              <span className="text-sm text-gray-500">Brand: {product.brand}</span>
            )}
            
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </div>
          {quantity > 1 && (
            <div className="text-sm text-gray-500">
              ${(product.price * quantity).toFixed(2)} total
            </div>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            disabled={!product.inStock}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="w-8 text-center font-medium">{quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            disabled={!product.inStock}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-700 p-1 transition"
          title="Remove from cart"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
