import { getRepository } from "typeorm";
import { Student } from "../models/Student";
import { Response, Request } from 'express';

export default {
    async index(request: Request, response: Response) {
        const studentReposity = getRepository(Student);
        const student = await studentReposity.find({
            relations: ['phones']
        })
        return response.json(student)
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;
        const studentReposity = getRepository(Student);
        const student = await studentReposity.findOneOrFail(id, 
        {relations: ['phones']})
        return response.json(student)
    },
    async create(request: Request, response: Response) {
        const {
            firstName,
            lastName,
            age,
            phones
        } = request.body;

        const studentReposity = getRepository(Student);
        const student = studentReposity.create({ firstName, lastName, age, phones });
        await studentReposity.save(student);

        return response.json(student);

    },
    async update(request: Request, response: Response) {
        const { id } = request.params
        const {
            firstName,
            lastName,
            age,
            phones
        } = request.body
        const studentReposity = getRepository(Student);
        const queryResult = await studentReposity.update(id, { firstName, lastName, age, phones });
        return response.json(queryResult)
    },
    async delete(request: Request, response: Response) {
        const { id } = request.params
        const studentReposity = getRepository(Student);
        const queryResult = await studentReposity.delete(id);
        return response.json(queryResult)

    }
};



