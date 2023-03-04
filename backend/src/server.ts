import Fastify from 'fastify'
import staticFiles from "@fastify/static";
import path from "path";
import { getDirName } from './lib/helpers.js';
import {allRoutes} from './routes.js'

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

/*
 * Creates an instance of Fastify and 
 * Adds our routes and static folder.
*/
export async function buildApp() {
  const app = Fastify({ logger: true });

  // add static file handling
  await app.register(staticFiles, {
    root: path.join(getDirName(import.meta), "../public"),
    prefix: "/public/",
});

  // Add our routes to fastify
  app.register(allRoutes);
  return app;
} 

/*
 * Opens up our application to listen on port 3000
*/
export async function listen(FastifyInstance) {
  await FastifyInstance.listen({ port: 3000 }, function (err, address) {
    if (err) {
      FastifyInstance.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
}
