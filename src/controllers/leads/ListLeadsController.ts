import { FastifyReply, FastifyRequest } from "fastify";

export class ListLeadsController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    return {
      leads: [],
    };
  }
}
