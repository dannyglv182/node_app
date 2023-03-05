/** @module Models/Question */
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
import {User} from "./user.js";

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

	// Each question belongs to a user
	@ManyToOne(() => User, (category: User) => category.questions)
    AskingUser: User;

	// Each question belongs to a game

	
}