/** @module dev_ds */
import "reflect-metadata"
import { DataSource, Relation } from 'typeorm';
// import { User, Question, Game, Console} from '../models/user.js';
import { User, Question, Answer, Game} from '../models/user.js';

// import { Question } from '../models/question.js';
// import { Console } from '../models/console.js';

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
        Question,
        Game,
        Answer
        // Console
    ],
    subscribers: [],
    migrations: [],
})

// AppDataSource.initialize();