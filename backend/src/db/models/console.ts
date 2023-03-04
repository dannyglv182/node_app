/** @module Models/Console */
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
// import {User} from "./user";

@Entity({name: "console"})
export class Console extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 100,
		type: "varchar"
	})
	name: string;

    // Add release year

    // Add many to many relationship with games
}