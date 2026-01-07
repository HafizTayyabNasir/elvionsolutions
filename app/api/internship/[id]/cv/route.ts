import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const applicationId = parseInt(id);

    const application = await prisma.internshipApplication.findUnique({
      where: { id: applicationId },
      select: {
        cvFileName: true,
        cvFileData: true,
        cvFileType: true,
      },
    });

    if (!application || !application.cvFileData) {
      return NextResponse.json({ message: 'CV file not found' }, { status: 404 });
    }

    // Convert base64 to buffer
    const fileBuffer = Buffer.from(application.cvFileData, 'base64');
    
    // Determine content type
    const contentType = application.cvFileType || 'application/octet-stream';
    
    // Get file extension for proper filename
    const fileName = application.cvFileName || 'cv.pdf';

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download CV error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

