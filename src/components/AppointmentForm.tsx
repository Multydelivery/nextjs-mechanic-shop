'use client';

import { useState } from 'react';
import { Service, ServiceCategory } from '@/types';

// Mock services data
const services: Service[] = [
  {
    id: '1',
    name: 'Oil Change Service',
    slug: 'oil-change',
    description: 'Complete oil change with premium motor oil',
    duration: 30,
    price: 49.99,
    category: ServiceCategory.MAINTENANCE,
    isActive: true
  },
  {
    id: '2',
    name: 'Brake Service',
    slug: 'brake-service',
    description: 'Brake inspection and repair',
    duration: 90,
    price: 159.99,
    category: ServiceCategory.REPAIR,
    isActive: true
  }
];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    serviceId: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({
          serviceId: '',
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          appointmentDate: '',
          appointmentTime: '',
          vehicleMake: '',
          vehicleModel: '',
          vehicleYear: '',
          licensePlate: '',
          notes: ''
        });
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700 mb-2">
            Service *
          </label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time *
          </label>
          <select
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select time</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
          </select>
        </div>

        <div>
          <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Make *
          </label>
          <input
            type="text"
            id="vehicleMake"
            name="vehicleMake"
            value={formData.vehicleMake}
            onChange={handleChange}
            required
            placeholder="e.g., Toyota"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Model *
          </label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            required
            placeholder="e.g., Camry"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Year *
          </label>
          <input
            type="number"
            id="vehicleYear"
            name="vehicleYear"
            value={formData.vehicleYear}
            onChange={handleChange}
            required
            min="1900"
            max={new Date().getFullYear() + 1}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-2">
            License Plate
          </label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Please describe any specific issues or concerns..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
      >
        Book Appointment
      </button>
    </form>
  );
}
