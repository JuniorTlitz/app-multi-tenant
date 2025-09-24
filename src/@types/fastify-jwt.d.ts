import "@fastify/jwt";
import { OrganizationRole } from "../../generated/prisma";

declare module "@fastify/jwt" {
  type Payload = {
    sub: string;
    organizationId: string;
    role: OrganizationRole;
  };
  interface FastifyJWT {
    payload: Payload;
    user: Payload;
  }
}
