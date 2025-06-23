'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AutoShop Pro</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional auto repair services and quality parts.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Main Street, City, ST 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@autoshoppro.com</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Oil Changes & Lube
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Brake Service & Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Tire Service & Alignment
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  A/C & Heating Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Transmission Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Auto Parts Store
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-white transition">
                  Schedule Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:30 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-yellow-400">Emergency Service</h5>
              <p className="text-gray-300 text-sm mb-1">24/7 Roadside Assistance</p>
              <p className="text-yellow-400 font-semibold text-lg">(555) 911-HELP</p>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold mb-2">Certifications</h5>
              <div className="flex space-x-2">
                <div className="bg-blue-600 px-2 py-1 rounded text-xs">ASE</div>
                <div className="bg-green-600 px-2 py-1 rounded text-xs">AAA</div>
                <div className="bg-red-600 px-2 py-1 rounded text-xs">NAPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for maintenance tips and special offers</p>
            
            {!isClient ? (
              // Static placeholder for SSR to prevent hydration mismatch
              <div className="flex max-w-md mx-auto">
                <div className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-gray-400">
                  Enter your email
                </div>
                <div className="bg-blue-600 px-6 py-2 rounded-r-lg text-white">
                  Subscribe
                </div>
              </div>
            ) : isSubscribed ? (
              <div className="max-w-md mx-auto bg-green-600 text-white px-4 py-3 rounded-lg">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  suppressHydrationWarning
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition"
                  suppressHydrationWarning
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AutoShop Pro. All rights reserved. | Licensed & Insured
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </Link>
              <Link href="/warranty" className="text-gray-400 hover:text-white text-sm transition">
                Warranty Info
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
