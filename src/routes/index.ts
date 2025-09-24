import { FastifyPluginAsync } from "fastify";
import { SignUpController } from "../controllers/auth/SignUpController";
import { SignInController } from "../controllers/auth/SignInController";

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/auth/signup", SignUpController.handle);
  fastify.post("/auth/signin", SignInController.handle);
};
