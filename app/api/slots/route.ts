import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Check if we have slots for today
    const count = await prisma.slot.count({
        where: { date: today }
    });

    if (count === 0) {
        // Create slots for today
        const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
        for (const time of times) {
            await prisma.slot.create({
                data: {
                    date: today,
                    time: time,
                    isBooked: false
                }
            });
        }
    }

    const slots = await prisma.slot.findMany({
        orderBy: [{ date: 'asc' }, { time: 'asc' }]
    });

    return NextResponse.json(slots.map(s => ({
        id: s.id,
        date: s.date,
        time: s.time,
        is_booked: s.isBooked
    })));
  } catch (error) {
    console.error('Slots error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { date, time } = await request.json();

    if (!date || !time) {
        return NextResponse.json({ message: 'Date and time required' }, { status: 400 });
    }

    const slot = await prisma.slot.create({
        data: {
            date,
            time,
            isBooked: false
        }
    });

    return NextResponse.json({
        id: slot.id,
        date: slot.date,
        time: slot.time,
        is_booked: slot.isBooked
    });
  } catch (error) {
    console.error('Create slot error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
