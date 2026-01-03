import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const user_email = searchParams.get('user_email');

    if (!user_email) {
        return NextResponse.json({ message: 'User email required' }, { status: 400 });
    }

    const slotId = parseInt(id);
    if (isNaN(slotId)) {
        return NextResponse.json({ message: 'Invalid slot ID' }, { status: 400 });
    }

    const slot = await prisma.slot.findUnique({ where: { id: slotId } });

    if (!slot) {
        return NextResponse.json({ message: 'Slot not found' }, { status: 404 });
    }

    if (slot.isBooked) {
        return NextResponse.json({ message: 'Slot already booked' }, { status: 400 });
    }

    await prisma.slot.update({
        where: { id: slotId },
        data: {
            isBooked: true,
            bookedBy: user_email
        }
    });

    return NextResponse.json({ message: 'Slot booked successfully' });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
