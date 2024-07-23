import { z } from 'zod';

const schema = z.object({
    content: z.string().min(1, "Content is required"),
    userId: z.string().min(1, "User ID is required"),
    channelId: z.string().min(1, "Channel ID is required"),
    createdAt: z.string().date(),
    updatedAt: z.string().date()
});

export default schema