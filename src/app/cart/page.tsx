'use client';

import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 6h.01M15 19h.01" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 text-sm font-medium transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Cart Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="mt-6">
            <Link 
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              {shipping > 0 && (
                <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </div>
              )}
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link 
              href="/checkout"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center block transition"
            >
              Proceed to Checkout
            </Link>

            {/* Payment Methods */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 mb-2">We accept</p>
              <div className="flex justify-center space-x-2">
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-medium">VISA</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-medium">MC</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-medium">AMEX</div>
                <div className="bg-gray-100 rounded px-2 py-1 text-xs font-medium">PayPal</div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure Checkout
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-4 text-center">
            <h3 className="font-semibold mb-1">Professional Installation</h3>
            <p className="text-sm opacity-90">Book installation service for your parts</p>
            <Link 
              href="/appointments" 
              className="inline-block mt-2 bg-white text-green-600 px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
