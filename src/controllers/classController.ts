import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import ClassRepository from '../config/database/repositores/ClassRepository';
import Class from '../models/Class';


export default {
    async create(request: Request, response: Response) {

        try {
            const classRepository = getRepository(Class);

            const classSave = await classRepository.save(request.body);

            return response.status(201).json(classSave);

        } catch (error) {
            console.log('err.message', error.message);

        }
    },
    async index(request: Request, response: Response) {
        const classRepository = getRepository(Class);
        const classes = await classRepository.find();
        response.json(classes);
    },
    async show(request: Request, response: Response) {
        const { name } = request.params
        try {
            const classRepository = getCustomRepository(ClassRepository);
            const classes = await classRepository.findByName(name)
            response.json(classes); 

        } catch (error) {
            console.log('err.message', error.message);
            response.status(404).json({message: `${name} não encontardo`});

        }
    }
}