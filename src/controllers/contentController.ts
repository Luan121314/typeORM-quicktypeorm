import { Request, Response } from 'express';
import {  getRepository } from 'typeorm';
import Content from '../models/Content';


export default {
    async create(request: Request, response: Response) {

        try {
            const contentRepository = getRepository(Content);

            const contentSave = await contentRepository.save(request.body);

            return response.status(201).json(contentSave);

        } catch (error) {
            console.log('err.message', error.message);

        }
    },
    async index(request: Request, response: Response) {
        const contentRepository = getRepository(Content);
        const contents = await contentRepository.find();
        response.json(contents);
    },
    async show(request: Request, response: Response) {
        const { name } = request.params
        try {
            const contentRepository = getRepository(Content);
            const content = await contentRepository.find({where: {name}})
            response.json(content); 

        } catch (error) {
            console.log('err.message', error.message);
            response.status(404).json({message: `${name} não encontardo`});

        }
    }
}