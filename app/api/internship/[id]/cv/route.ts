import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const applicationId = parseInt(id);

    console.log('Fetching CV for application ID:', applicationId);

    const application = await prisma.internshipApplication.findUnique({
      where: { id: applicationId },
      select: {
        cvFileName: true,
        cvFileData: true,
        cvFileType: true,
      },
    });

    console.log('Application found:', {
      hasFileName: !!application?.cvFileName,
      fileName: application?.cvFileName,
      hasFileData: !!application?.cvFileData,
      fileDataLength: application?.cvFileData?.length,
      fileType: application?.cvFileType
    });

    if (!application) {
      console.error('Application not found');
      return NextResponse.json({ message: 'Application not found' }, { status: 404 });
    }

    if (!application.cvFileData) {
      console.error('CV file data not found in database');
      return NextResponse.json({ message: 'CV file not found' }, { status: 404 });
    }

    // cvFileData is already a Buffer (binary data)
    const fileBuffer = Buffer.from(application.cvFileData);
    console.log('Buffer size:', fileBuffer.length);
    
    // Get file extension for proper filename
    const fileName = application.cvFileName || 'cv.pdf';
    
    // Determine content type based on file extension if not stored
    let contentType = application.cvFileType;
    if (!contentType && fileName) {
      const ext = fileName.toLowerCase().split('.').pop();
      switch (ext) {
        case 'pdf':
          contentType = 'application/pdf';
          break;
        case 'doc':
          contentType = 'application/msword';
          break;
        case 'docx':
          contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
        default:
          contentType = 'application/octet-stream';
      }
    }
    if (!contentType) {
      contentType = 'application/octet-stream';
    }

    console.log('Sending file:', { fileName, contentType, bufferSize: fileBuffer.length });

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Download CV error:', error);
    return NextResponse.json({ 
      message: 'Internal server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

