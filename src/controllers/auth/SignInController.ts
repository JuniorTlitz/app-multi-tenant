import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { compare } from "bcryptjs";
import { db } from "../../lib/db";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export class SignInController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = schema.parse(request.body);

    const user = await db.user.findUnique({
      where: { email },
      select: { id: true, password: true },
    });

    if (!user || !(await compare(password, user.password))) {
      return reply.code(401).send({ error: "Invalid credentials" });
    }

    const accessToken = "";

    reply.code(201).send({ accessToken });
  }
}
