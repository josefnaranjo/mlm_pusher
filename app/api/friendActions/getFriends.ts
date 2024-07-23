import { NextRequest, NextResponse } from 'next/server';
import { db as prisma } from "@/lib/db";
import { currentUser } from '@/lib/current-user';

export async function GET() {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const friends = await prisma.friend.findMany({
            where: {
                OR: [
                    { userId: user.id },
                    { friendId: user.id }
                ]
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        settings: {
                            select: {
                                about: true,
                                username: true
                            }
                        }
                    }
                },
                friend: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        settings: {
                            select: {
                                about: true,
                                username: true
                            }
                        }
                    }
                }
            }
        });

        const uniqueFriends = Array.from(new Set(friends.map(friend => {
            if (friend.userId === user.id) {
                return JSON.stringify({
                    id: friend.friend.id,
                    name: friend.friend.name,
                    image: friend.friend.image,
                    username: friend.friend.settings?.username,
                    about: friend.friend.settings?.about
                });
            } else {
                return JSON.stringify({
                    id: friend.user.id,
                    name: friend.user.name,
                    image: friend.user.image,
                    username: friend.user.settings?.username,
                    about: friend.user.settings?.about
                });
            }
        }))).map(str => JSON.parse(str));

        return NextResponse.json(uniqueFriends, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error retrieving friends list' }, { status: 500 });
    }
}
