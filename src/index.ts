import Fastify from "fastify";
import { routes } from "./routes";
import { ZodError } from "zod";

const fastify = Fastify();

fastify.register(routes);

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
