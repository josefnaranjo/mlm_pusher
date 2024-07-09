import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import { db as prisma } from "@/lib/db";


export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch message en ROUTE" }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  let debugVar = "";

  try {
    let { content, userId, channelId} = await request.json(); // Ensure content is included
    channelId = "07942561-fc74-4612-9324-34ae03ae49e6";
    const createdAt = new Date();

    if (!content || !userId) {
      return NextResponse.json({ error: 'Content and userId are required' }, { status: 404 });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json({ error: 'User not found en ROUTE' }, { status: 400 });
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

    debugVar += "pls work triple"; 

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ error: 'Failed to create message in the API route.tsx' + debugVar, bigError: error}, { status: 500 });
  }
}


export async function PUT(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const { id, content } = await request.json();
    const editedMessage = await prisma.message.update({
      where: { id },
      data: { content },
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


export async function PATCH (request: NextRequest) {
  const session = await auth();

  if (!session) return NextResponse.json('Unauthorized', { status: 401 });

  try {
    const { id, content } = await request.json();
    console.log(`Updating message with ID: ${id}`); // Debug line
    
    const updatedMessage = await prisma.message.update({
        where: { id },
        data: { content },
    });
    return NextResponse.json({ message: 'Updated message successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ error: 'Failed to update message en ROUTE' }, { status: 500 });
  }
}