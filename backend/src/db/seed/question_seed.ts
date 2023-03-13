import {FastifyInstance} from "fastify";
import { Question } from "../models/user.js";
import { AppDataSource } from "../datasources/dev_ds.js";
import { Game } from "../models/user.js";

export async function QuestionSeeder(app: FastifyInstance){ 

    const gameRepository = AppDataSource.getRepository(Game);
    const questionRepository = AppDataSource.getRepository(Question);
    const games = await gameRepository.find();
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
        "Do I need the bird to get the bird key?",
        "Is there anywhere I can get a bunch of extra lives?",
        "How do I get the last key?",
        "Is there any way to skip the bonus rounds?",
        "Where do I save?",
        "Do I need the bird to get the bird key?",
        "Is there anywhere I can get a bunch of extra lives?",
        "How do I get the last key?",
        "Is there any way to skip the bonus rounds? They feel repetetive",
        "Can you skip the second to last fight?",
        "Do I need the bird to get the bird key?"
    ]

       // Check if the Question table is empty
       let qsInDb = await questionRepository.find({
           take: 1,
       })

       // Seed the question table if it's empty
       if (qsInDb.length < 1) {
        for (let i = 0; i < questions.length; i++) {
            let newQuestion = new Question();
            newQuestion.name = "How do I?"
            newQuestion.text = questions[i];

            if (i == 0) {
                newQuestion.owningGame = games[0];
            }
            else {
                newQuestion.owningGame = games[(games.length - 1) % i];
            }
            await newQuestion.save();
        }
        
    }
}