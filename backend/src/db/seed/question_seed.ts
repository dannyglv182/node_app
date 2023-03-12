import {FastifyInstance} from "fastify";
import { Question } from "../models/user.js";
import { AppDataSource } from "../datasources/dev_ds.js";
import { Game } from "../models/user.js";

export async function QuestionSeeder(app: FastifyInstance){ 

    let questions: string[] = [
        "Is there anywhere I can get a bunch of extra lives?",
        "How do I get the last key?",
        "Is there any way to skip the bonus rounds?",
        "Where do I save?",
        "Do I need the bird to get the bird key?",
        "Is there anywhere I can get a bunch of extra lives?",
        "How do I get the last key?",
        "Is there any way to skip the bonus rounds? They feel repetetive",
        "Where do I save?",
        "Do I need the bird to get the bird key?"
    ] 
       // Seed the Question table if it is empty
       const questionRepository = AppDataSource.getRepository(Question);
       let qsInDb = await questionRepository.find({
           take: 1,
       })

       if (qsInDb.length < 1) {
        for (let i = 0; i < questions.length; i++) {
            let newQuestion = new Question();
            newQuestion.name = "How do I?"
            newQuestion.text = questions[i];
            await newQuestion.save();
        }
    }

    // Assign the questions to games
    // const gameRepository = AppDataSource.getRepository(Game);
    // const games = await gameRepository.find();
}