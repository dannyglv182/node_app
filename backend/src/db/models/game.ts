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

@Entity({name: "Game"})
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
}