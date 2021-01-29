import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Class from "./Class";

@Entity()

export default class Student{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    key:  number;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

    @CreateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    updated_at: Date;


}