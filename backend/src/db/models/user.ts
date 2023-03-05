/** @module Models/User */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
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


	@OneToMany(() => Question, (category: Question) => category.AskingUser)
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

	@ManyToOne(() => User, (category: User) => category.questions)
    AskingUser: User;

	
}