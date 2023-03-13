import {buildApp, listen} from "./server.js";
import "reflect-metadata";
import {DataSource, Repository} from "typeorm";
import { AppDataSource } from "./db/datasources/dev_ds.js";
import {Game, User} from "./db/models/user.js";
import {GameSeeder} from "./db/seed/game_seed.js";
import {UserSeeder} from "./db/seed/user_seed.js";
import {QuestionSeeder} from "./db/seed/question_seed.js";

const app = await buildApp();
void await listen(app);
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
    UserSeeder(app);
    GameSeeder(app);
    QuestionSeeder(app);
});
// const app = await buildApp();
// void await listen(app);

// SEED IF DATABASE IS EMPTY
