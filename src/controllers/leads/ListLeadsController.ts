import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListLeadsController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const { organizationId } = request.user;

    console.log("organizationId", request.user);

    const leads = await db.lead.findMany({
      where: {
        organizationId,
      },
    });

    return {
      leads,
    };
  }
}
