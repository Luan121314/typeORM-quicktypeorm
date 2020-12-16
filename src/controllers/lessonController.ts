import { Request, Response } from 'express';
import {  getRepository } from 'typeorm';
import Lesson from '../models/Lesson';


export default {
    async create(request: Request, response: Response) {

        try {
            const lessonRepository = getRepository(Lesson);

            const lessonSave = await lessonRepository.save(request.body);

            return response.status(201).json(lessonSave);

        } catch (error) {
            console.log('err.message', error.message);

        }
    },
    async index(request: Request, response: Response) {
        const lessonRepository = getRepository(Lesson);
        const lessons = await lessonRepository.find();
        response.json(lessons);
    },
    async show(request: Request, response: Response) {
        const { name } = request.params
        try {
            const lessonRepository = getRepository(Lesson);
            const lesson = await lessonRepository.find({where: {name}})
            response.json(lesson); 

        } catch (error) {
            console.log('err.message', error.message);
            response.status(404).json({message: `${name} não encontardo`});

        }
    }
}