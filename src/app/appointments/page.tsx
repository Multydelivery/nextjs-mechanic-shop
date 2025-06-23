import AppointmentForm from '@/components/AppointmentForm';

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Book an Appointment</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Schedule your vehicle service with our expert technicians
        </p>
        
        <AppointmentForm />
      </div>
    </div>
  );
}
