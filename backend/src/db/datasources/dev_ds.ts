import { DataSource } from 'typeorm';
import { User } from '../models/user';
import { Question } from '../models/question';
import { Game } from '../models/game';
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "app_dev",
    password: "retro_app",
    database: "retro_app",
    synchronize: true,
    logging: true,
    entities: [
        User
    ],
    subscribers: [],
    migrations: [],
})