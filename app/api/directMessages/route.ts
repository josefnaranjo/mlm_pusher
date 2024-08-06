import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth"; // Ensure this is imported if you use authentication
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const channelId = params.get("id") || "";
  const startTS = parseInt(params.get("createdTS") || "0");

  try {
    const messages = await prisma.message.findMany({
      where: {
        channelId,
        createdAt: {
          gte: new Date(startTS),
        },
      },
      include: {
        user: {
          select: { name: true, image: true },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Error fetching messages" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { channelId, content, userId } = body;

    if (!channelId || !content || !userId) {
      return NextResponse.json(
        { error: "Channel ID, content, and user ID are required" },
        { status: 400 }
      );
    }

    const savedMessage = await prisma.message.create({
      data: {
        content,
        channelId: String(channelId),
        userId,
      },
      include: {
        user: {
          select: { name: true, image: true },
        },
      },
    });

    return NextResponse.json(savedMessage, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { error: "Error saving message" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  try {
    const { id, text } = await request.json();

    if (!id || !text) {
      return NextResponse.json(
        { error: "ID and text are required" },
        { status: 400 }
      );
    }

    const updatedMessage = await prisma.message.update({
      where: { id },
      data: { content: text, updatedAt: new Date() },
    });

    return NextResponse.json(updatedMessage, { status: 200 });
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json(
      { error: "Failed to update message" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  try {
    const { id, text } = await request.json();

    if (!id || !text) {
      return NextResponse.json(
        { error: "ID and text are required" },
        { status: 400 }
      );
    }

    const editedMessage = await prisma.message.update({
      where: { id },
      data: { content: text },
    });

    return NextResponse.json(editedMessage, { status: 200 });
  } catch (error) {
    console.error("Error editing message:", error);
    return NextResponse.json(
      { error: "Failed to edit message" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json("Unauthorized", { status: 401 });

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.message.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Message deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
