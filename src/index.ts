import Fastify from "fastify";
import { routes } from "./routes";
import { ZodError } from "zod";
import fastifyJwt from "@fastify/jwt";

const fastify = Fastify();

fastify.register(routes);
fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!,
  sign: {
    expiresIn: "1h",
  },
});

fastify.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    reply.code(400).send({ errors: error.issues });
  }

  console.log(error);
  reply.code(500).send({ error: "Internal server error" });
});

fastify
  .listen({ port: 3000 })
  .then(() => console.log("Server started at http://localhost:3000"));
