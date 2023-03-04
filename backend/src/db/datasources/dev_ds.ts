/** @module dev_ds */
import "reflect-metadata"
import { DataSource } from 'typeorm';
// import { User } from '../models/user';
// import { Question } from '../models/question';
// import { Game } from '../models/game';
// import { Console } from '../models/console';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "app_dev",
    password: "retro_app",
    database: "retro_app",
    synchronize: true,
    logging: true,
    entities: [
        // User,
        // Question,
        // Game,
        // Console
    ],
    subscribers: [],
    migrations: [],
})

// AppDataSource.initialize();