import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import   { CellPhone } from './CellPhone'


@Entity()
export class Student {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
    
    @OneToMany(()=> CellPhone, cellPhone => cellPhone.student, {
        cascade: ['insert', 'update', 'remove']
    } )

    @JoinColumn({name: 'student_id'})
    phones: CellPhone[]


}

