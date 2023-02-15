import { prisma } from "../../../lib/prisma";

export class ListUsersService {
  async execute() {
    const users = await prisma.user.findMany()
    return users
  }
}