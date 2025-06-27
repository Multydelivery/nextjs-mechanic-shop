import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['serviceId', 'customerName', 'customerEmail', 'customerPhone', 'appointmentDate'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Demo mode - just log and return success
    console.log('Appointment booking (demo mode):', body);

    // Mock response
    const appointment = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Demo mode - return mock appointments
  const mockAppointments = [
    {
      id: '1',
      serviceId: '1',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      appointmentDate: new Date().toISOString(),
      status: 'pending'
    }
  ];
  return NextResponse.json({ appointments: mockAppointments });
}
