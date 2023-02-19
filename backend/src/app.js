import {buildApp, listen} from "./server.js";

const app = await buildApp();
void await listen(app);