import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { hash } from "bcryptjs";
import { db } from "../../lib/db";

const schema = z.object({
  user: z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
  }),
  organization: z.object({
    name: z.string().min(1),
  }),
});

export class SignUpController {
  static async handle(request: FastifyRequest, reply: FastifyReply) {
    const { user, organization } = schema.parse(request.body);

    const userAlreadyExists = await db.user.findUnique({
      where: { email: user.email },
      select: { id: true },
    });

    if (userAlreadyExists) {
      return reply.code(409).send({ error: "This email already in use." });
    }

    const hashedPassword = await hash(user.password, 9);

    const { id } = await db.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashedPassword,
        organizations: {
          create: {
            organization: {
              create: {
                name: organization.name,
              },
            },
          },
        },
      },
    });

    reply.code(201).send({ id });
  }
}
