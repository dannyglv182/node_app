export async function allRoutes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'Hello Universe' }
    })
  }