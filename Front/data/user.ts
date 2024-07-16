import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: { email },
    });
  } catch {
    return null;
  }
};

export const getUserById = async (id: string, options: any = {}) => {
  try {
    return await db.user.findUnique({
      where: { id },
      ...options,
    });
  } catch {
    return null;
  }
};
