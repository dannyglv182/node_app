import {FastifyInstance} from "fastify";
import { Question } from "../models/user.js";
import { AppDataSource } from "../datasources/dev_ds.js";
import { User } from "../models/user.js";

export async function UserSeeder(app: FastifyInstance){ 

    let people: string[] = [
        "John Smith-person1@email.com",
        "John Smithe-person2@email.com",
        "John Smithee-person3@email.com",
        "John Smitheee-person4@email.com",
        "John Smitheeee-person5@email.com",
        "John Smith-person6@email.com",
        "John Smithh-person7@email.com",
        "John Smithhh-person8@email.com",
        "John Smithhhh-person9@email.com",
        "John Smithhhhh-person10@email.com"
    ] 
       // Seed the User table if it is empty
       const userRepository = AppDataSource.getRepository(User);
       let usersInDb = await userRepository.find({
           take: 1,
       })

       if (usersInDb.length < 1) {
        for (let i = 0; i < people.length; i++) {
            let nameAndEmail: string[] = people[i].split("-");
            let newUser = new User();
            newUser.name = nameAndEmail[0];
            newUser.email= nameAndEmail[1];
            await newUser.save();
        }
    }
}