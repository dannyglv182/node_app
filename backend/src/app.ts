import {buildApp, listen} from "./server.js";
import "reflect-metadata";
import {DataSource, Repository} from "typeorm";
// import { AppDataSource } from "./db/datasources/dev_ds";

const app = await buildApp();
void await listen(app);