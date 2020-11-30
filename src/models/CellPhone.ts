import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Student} from './Student'

@Entity()
export class CellPhone {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    operator: string;

    @Column()
    number: number;

    @ManyToOne(()=> Student, student => student.phones)
    @JoinColumn({name: 'student_id'})
    student: Student
    
}

