/*
 * Our application routes  
*/
export async function allRoutes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'Hello Universe' }
    })

    /**
     * ENDPOINT FOR A GAME
     * Gets a game by game title
     */
    fastify.get('/game/:gameTitle', async (request, reply) => {

      // Check if the game exists in the database 

      // Load the game page if the game is in our database

      // If the game is not in our database, then get the info from RAWG 
      // and update our database and take the user to the new game page
/* 
      fetch("https://api.rawg.io/api/games?key=a4a06ca7c5234e0ca95204d3fa4d84c1&platforms=4")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
 */
      // 
    })
    
  }