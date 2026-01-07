import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { fullName, personalEmail, universityEmail, fieldOfInterest, expectations, cvFileName, cvFileUrl } = await request.json();

    await prisma.internshipApplication.create({
      data: {
        fullName,
        personalEmail,
        universityEmail,
        fieldOfInterest,
        expectations,
        cvFileName: cvFileName || null,
        cvFileUrl: cvFileUrl || null,
      },
    });

    return NextResponse.json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Internship application error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const applications = await prisma.internshipApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error('Get internship applications error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

