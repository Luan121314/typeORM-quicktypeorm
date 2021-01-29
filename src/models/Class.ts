import {Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";
import Lesson from "./Lesson";

@Entity()
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(type => Lesson, classe => Class)
    lessons: Lesson[];


    @Column()
    duration: number;

    @CreateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    updated_at: Date;


}
