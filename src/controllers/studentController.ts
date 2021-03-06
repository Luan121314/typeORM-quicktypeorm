import { Request, Response } from 'express';
import {  getRepository } from 'typeorm';
import Student from '../models/Student';


export default {
    async create(request: Request, response: Response) {

        try {
            const studentRepository = getRepository(Student);

            const studentSave = await studentRepository.save(request.body);

            return response.status(201).json(studentSave);

        } catch (error) {
            console.log('err.message', error.message);

        }
    },
    async index(request: Request, response: Response) {
        const studentRepository = getRepository(Student);
        const students = await studentRepository.find();
        response.json(students);
    },
    async show(request: Request, response: Response) {
        const { name } = request.params
        try {
            const studentRepository = getRepository(Student);
            const student = await studentRepository.find({where: {name}})
            response.json(student); 

        } catch (error) {
            console.log('err.message', error.message);
            response.status(404).json({message: `${name} não encontardo`});

        }
    }
}