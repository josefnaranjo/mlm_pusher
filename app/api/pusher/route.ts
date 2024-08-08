import { NextResponse } from "next/server";
import Pusher from "pusher";
import prisma from "@/prisma/client"; // Ensure this path matches your actual path

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export async function POST(req: Request) {
  const { channelName, eventName, message } = await req.json();

  try {
    // Create or find the correct channel based on your logic
    const savedMessage = await prisma.message.create({
      data: {
        content: message.content,
        channelId: message.channelId, // This should be unique per environment
        userId: message.userId,
      },
      include: {
        user: true,
      },
    });

    // Ensure that your frontend is subscribing to the correct Pusher channels
    await pusher.trigger(channelName, eventName, {
      ...savedMessage,
      user: {
        name: savedMessage.user.name,
        image: savedMessage.user.image,
      },
    });

    return NextResponse.json({ success: true, message: savedMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { error: "Error saving message" },
      { status: 500 }
    );
  }
}

