import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";
import { currentUser } from "@/lib/current-user";

export async function DELETE(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { serverId } = await req.json();

    if (!serverId) {
      return NextResponse.json({ error: "Missing server ID" }, { status: 400 });
    }

    // Check if the user is a member of the server
    const member = await prisma.member.findFirst({
      where: {
        serverId,
        userId: user.id,
      },
    });

    if (!member) {
      return NextResponse.json(
        { error: "You are not a member of this server" },
        { status: 404 }
      );
    }

    // Fetch all members of the server, ordered by join date
    const members = await prisma.member.findMany({
      where: {
        serverId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Remove the member from the server
    await prisma.member.delete({
      where: {
        id: member.id,
      },
    });

    // If the member was an admin then assign the admin role to the next person in line
    if (member.role === "ADMIN" && members.length > 1) {
      const nextInLine = members[1]; // The second person in the list
      await prisma.member.update({
        where: {
          id: nextInLine.id,
        },
        data: {
          role: "ADMIN",
        },
      });
    }

    // I did this because I think Admins should be allowed to also leave a server instead of only deleting it

    return NextResponse.json(
      { message: "Successfully left the server" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to leave server:", error);
    return NextResponse.json(
      { error: "Failed to leave server" },
      { status: 500 }
    );
  }
}
