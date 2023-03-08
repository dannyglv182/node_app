// /** @module dev_ds */
import dotenv from "dotenv";
import { DataSource, Relation } from 'typeorm';
import { User, Question, Answer, Game} from '../models/user.js';

// import { Question } from '../models/question.js';
// import { Console } from '../models/console.js';

dotenv.config();
const env = process.env;
export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.HOST,
    port: Number(env.PORT),
    username: env.USERNAME,
    password: env.PASSWORD,
    database: env.DATABASE,
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