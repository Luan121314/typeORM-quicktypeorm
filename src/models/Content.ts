import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

    @Column({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    created_at:Date;

    @Column({type: 'timestamp', default: ()=> "CURRENT_TIMESTAMP"})
    updated_at: Date;


}