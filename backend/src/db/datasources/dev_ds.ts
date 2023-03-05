/** @module dev_ds */
import "reflect-metadata"
import { DataSource, Relation } from 'typeorm';
import { User, Question } from '../models/user.js';
// import { Question } from '../models/question.js';
import { Game } from '../models/game.js';
import { Console } from '../models/console.js';

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
        User,
        Question
        // Game,
        // Console
    ],
    subscribers: [],
    migrations: [],
})

// AppDataSource.initialize();