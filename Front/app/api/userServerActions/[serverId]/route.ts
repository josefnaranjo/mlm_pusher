import { NextRequest, NextResponse } from 'next/server';
import { db as prisma } from "@/lib/db";
import { currentUser } from '@/lib/current-user';

export async function GET(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      console.error('User not authenticated');
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { pathname } = new URL(req.url);
    const serverId = pathname.split('/').pop();

    if (!serverId) {
      console.error('Missing serverId');
      return NextResponse.json({ error: 'Missing serverId' }, { status: 400 });
    }

    console.log(`Fetching server with ID: ${serverId}`);
    const server = await prisma.server.findUnique({
      where: { id: serverId },
    });

    if (!server) {
      console.error('Server not found');
      return NextResponse.json({ error: 'Server not found' }, { status: 404 });
    }

    // find the member of the server
    const member = await prisma.member.findFirst({
      where: {
        serverId,
        userId: user.id,
      },
    });

    if (!member) {
      console.error('User is not a member of this server');
      return NextResponse.json({ error: 'You are not a member of this server' }, { status: 405 });
    }

    const inviteCode = server.inviteCode;
    const isAdmin = member.role === 'ADMIN'; // Admin check for the right click function. ONLY admin should be able to nuke the server

    const response = {
      inviteCode,
      isAdmin,
    };

    console.log('Invite code and admin status fetched successfully:', response);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching server:', error);
    return NextResponse.json({ error: 'Failed to fetch server' }, { status: 500 });
  }
}
