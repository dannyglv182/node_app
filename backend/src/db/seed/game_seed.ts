import {FastifyInstance} from "fastify";
import { Game } from "../models/user.js";
import { AppDataSource } from "../datasources/dev_ds.js";
export async function GameSeeder(app: FastifyInstance){

    /*
    * Data obtained from https://www.kaggle.com/datasets/gregorut/videogamesales
    * https://github.com/GregorUT/vgchartzScrape
    */
    let games: string[] = [
        "Super Mario World - SNES	1990	Platform	Nintendo	12.78",
        "Super Mario All Stars	- SNES	1993	Platform	Nintendo	5.99",
        "Donkey Kong Country - SNES	1994	Platform	Nintendo	4.36",
        "Super Mario Kart - SNES	1992	Racing	Nintendo	3.54",
        "Street Fighter II: The World Warrior - SNES	1992	Fighting	Capcom	2.47",
        "Donkey Kong Country 2: Diddy's Kong Quest - SNES	1995	Platform	Nintendo	2.1",
        "The Legend of Zelda: A Link to the Past - SNES	1991	Action	Nintendo	2.42",
        "Super Mario World 2: Yoshi's Island - SNES	1995	Platform	Nintendo	1.65",
        "Street Fighter II Turbo - SNES	1992	Fighting	Capcom	1.42",
        "Donkey Kong Country 3: Dixie Kong's Double Trouble! - SNES	1996	Platform	Nintendo	1.17"
    ] 

    // Seed the Game table if it is empty
    const gameRepository = AppDataSource.getRepository(Game);
    let gamesInDb = await gameRepository.find({
        take: 1,
    })
    if (gamesInDb.length < 1) {
        for (let i = 0; i < games.length; i++) {
            let title: string[] = games[i].split("-")
            console.log(title[0]);
            let newGame = new Game();
            newGame.name = title[0];
            newGame.pictureLink = "linktopicture";
            await newGame.save();
        }
    }
}