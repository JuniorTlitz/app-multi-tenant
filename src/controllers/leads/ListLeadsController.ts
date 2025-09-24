import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../../lib/db";

export class ListLeadsController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const organizationId = randomUUID();

    const leads = await db.lead.findMany({
      where: {
        orgnanizationId: organizationId,
      },
    });

    return {
      leads,
    };
  }
}
