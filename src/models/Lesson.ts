import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Class from "./Class";
import Content from "./Content";

@Entity()
export default class Lesson{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content;

    @ManyToOne(type => Class, lessons => Lesson, {
        eager: true
    })
    classe: Class

    @CreateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    updated_at: Date;




}