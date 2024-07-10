// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "./env";
import { errorHandler } from "./error-handler";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
const app = Fastify({
  logger: true,
});

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setErrorHandler(errorHandler);

// Declare a route
app.register(createTrip);
app.register(confirmTrip);
// Run the server!
app.listen({ port: env.PORT }).then(() => {
  console.log("Server running");
});
