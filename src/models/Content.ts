import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Lesson from './Lesson';

@Entity()
export default class Content{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Lesson, content => Content)
    @JoinColumn()
    
    lesson: Lesson

    @Column()
    description: string;

    @Column()
    linkContent: string;

    @CreateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    created_at:Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    updated_at: Date;


}