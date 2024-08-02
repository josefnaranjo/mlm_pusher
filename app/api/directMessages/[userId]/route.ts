import { NextRequest, NextResponse } from 'next/server';
import { db as prisma } from "@/lib/db";
import { currentUser } from '@/lib/current-user';

export async function GET(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { pathname } = new URL(req.url);
    const userId = pathname.split('/').pop();

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const currentUserId = user.id;
    const channelIdentifier = [currentUserId, userId].sort().join('-');

    // Fetch messages for this direct channel
    const messages = await prisma.message.findMany({
      where: { channelId: channelIdentifier },
      orderBy: { createdAt: 'asc' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { pathname } = new URL(req.url);
    const userId = pathname.split('/').pop();

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
    }

    const currentUserId = user.id;
    const channelIdentifier = [currentUserId, userId].sort().join('-');

    const { content } = await req.json();

    // Directly use this channel identifier to create messages
    const newMessage = await prisma.message.create({
      data: {
        content,
        userId: currentUserId,
        channelId: channelIdentifier,
      },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
  }
}
