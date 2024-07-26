import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import { db as prisma } from "@/lib/db";


export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch message en ROUTE" }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    let { content, userId, channelId} = await request.json();
    const createdAt = new Date();

    const user = await prisma.user.findUnique({ where: { id: userId } });
    const channel = await prisma.channel.findUnique({ where: { id: channelId } })

    if (!user || !userId) {
      return NextResponse.json({ error: 'User or user_ID not found en ROUTE' }, { status: 400 });
    }

    if (!channel || !channelId) {
      return NextResponse.json({ error: 'Channel or channel_ID not found en ROUTE' }, { status: 400 });
    }

    if (!content) {
      return NextResponse.json({ error: 'Content not found en ROUTE' }, { status: 400 });
    }

    const newMessage = await prisma.message.create({
      data: {
        content,
        userId: user.id,
        channelId,
        createdAt,
        updatedAt: createdAt
      },
    });


    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ error: 'Failed to create message in the API route.tsx'}, { status: 500 });
  }
}


export async function PATCH (request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });
 
  try {
    const { id, text } = await request.json();

    if (!id ) {
      console.log('Invalid input:', { id });
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    if (!text) {
      console.log('Invalid input:', { text });
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    } 

    console.log(`Updating message with ID: ${id}`);
    
    await prisma.message.update({
        where: { id },
        data: { content: text,
                updatedAt: new Date()
         },
    });

    console.log(`Successfully updated message with ID: ${id}`); 
    return NextResponse.json({ message: 'Updated message successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ error: 'Failed to update message en ROUTE'}, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (request.method !== 'PUT') {
    return NextResponse.json({ error: 'Method not allowed'}, { status: 405 });
  }

  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const { id, text } = await request.json();
    const editedMessage = await prisma.message.update({
      where: { id },
      data: { content : text },
    });
    return NextResponse.json(editedMessage, { status: 200 });
  } catch (error) {
    console.error("Error editing message:", error);
    return NextResponse.json({ error: "failed to edit message en ROUTE" }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const { id } = await request.json();
    console.log(`Deleting message with ID: ${id}`); // Debug line

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await prisma.message.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Message deleted' }, { status: 200 });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
