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
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { pathname } = new URL(req.url);
    const userId = pathname.split("/").pop();

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const currentUserId = user.id;
    const channelIdentifier = [currentUserId, userId].sort().join("-");

    const { content } = await req.json();

    // Check if a direct message channel exists; if not, create one
    let channel = await prisma.channel.findUnique({
      where: { id: channelIdentifier },
    });

    if (!channel) {
      // Create a dummy server for direct messages if needed
      let directMessageServer = await prisma.server.findFirst({
        where: { name: "Direct Messages" },
      });

      if (!directMessageServer) {
        directMessageServer = await prisma.server.create({
          data: {
            name: "Direct Messages",
            imageURL: null,
            inviteCode: "",
            userId: currentUserId,
          },
        });
      }

      // Create the channel if it doesn't exist
      channel = await prisma.channel.create({
        data: {
          id: channelIdentifier,
          name: `Direct Message between ${currentUserId} and ${userId}`,
          type: "TEXT", // Assuming text type for direct messages
          userId: currentUserId,
          serverId: directMessageServer.id,
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        content,
        userId: currentUserId,
        channelId: channel.id,
      },
      include: {
        user: {
          select: { name: true, image: true },
        },
      },
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Error creating direct message:", error);
    return NextResponse.json(
      { error: "Failed to create message" },
      { status: 500 }
    );
  }
}
