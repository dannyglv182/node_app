import Fastify from 'fastify'
import {allRoutes} from './routes.js'

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */


// add our routes and return Fastify
export async function buildApp() {
  const app = Fastify({ logger: true });

  // Add our routes to fastify
  app.register(allRoutes);
  return app;
} 

// Run the server
export async function listen(FastifyInstance) {
  await FastifyInstance.listen({ port: 3000 }, function (err, address) {
    if (err) {
      FastifyInstance.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
}
