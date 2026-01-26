import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { messageId: string } }
) {
  try {
    const { messageId } = params;
    await prisma.message.delete({
      where: { id: parseInt(messageId) },
    });

    return NextResponse.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Delete message error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
