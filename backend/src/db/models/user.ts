/** @module Models/UserZ */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	ManyToOne,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	JoinColumn,
	JoinTable,
	Relation,
	UpdateDateColumn
} from "typeorm";
// import {Question} from "./question.js";

@Entity({name: "users"})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
		type: "varchar"
	})
	name: string;


	// A user can ask many questions
	@OneToMany(() => Question, (category: Question) => category.AskingUser)
	questions: Question[];

}

@Entity()
export class Game extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
		type: "varchar"
	})
	name: string;

    @Column()
	pictureLink: string;

 
	// Each game can have many questions
	@OneToMany(() => Question, (category: Question) => category.owningGame)
	questions: Question[];
 
}


@Entity({name: "question"})
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
		type: "varchar"
	})
	name: string;

    @Column({
		length: 280,
		type: "varchar"
	})
	text: string;


	// Each question belongs to one user
	@ManyToOne(() => User, (category: User) => category.questions)
    AskingUser: User;

  
	// Each question belongs to one game
	@ManyToOne(() => Game, (Game) => Game.questions)
    owningGame: Game; 
 

	// A question may have many answers
	@OneToMany(() => Answer, (category: Answer) => category.originalQuestion)
	answers: Answer[];


}

 



@Entity({name: "answer"})
export class Answer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 280,
		type: "varchar"
	})
	text: string

 
	// Each answer belongs to one question
	@ManyToOne(() => Question, (category: Question) => category.answers)
    originalQuestion: Question;
 
}

/*
@Entity({name: "console"})
export class Console extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 280,
		type: "varchar"
	})
	name: string

	// A console has many games and games can have many consoles
	@ManyToMany(() => Game)
    @JoinTable()
    games: Game[]
}

 */
