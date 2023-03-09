import cors from "cors";
import "reflect-metadata";
import {Game, User} from "./db/models/user.js";
import { AppDataSource } from "./db/datasources/dev_ds.js";
/*
 * Our application routes  
*/
export async function allRoutes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'Hello Universe' }
    })

    /**
     * TEMPORARY ENDPOINT TO ADD A GAME WITH SOME DATA
     */
    fastify.get('/add', async (request, reply) => {
      // const userMetadata = AppDataSource.getMetadata(User);
      // const gameRepository = AppDataSource.getRepository(Game);
      // gameRepository.save(newGame);
      // await newGame.save();
            
      let newGame = new Game();
      newGame.name = "Sonic The Hedgehog 2";
      newGame.pictureLink = "linktopicture";
      await newGame.save();


      return { hello: 'Hello Universe' }
    })

    /**
     * ENDPOINT FOR A GAME Gets a game by game id.
     * @name get/users/:gameId
     */
    fastify.get('/game/:gameId', async (request, reply) => {
      const gameId = request.params.gameId; 
      const gameRepository = AppDataSource.getRepository(Game);
      const game = await gameRepository.findOneBy({
        id: gameId,
      })

      if (game != null) {
        return { name: game.name };
      }
      return {name: "unknown"};
  




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