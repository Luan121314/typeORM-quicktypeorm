import { Router } from 'express';
import studentController from './controllers/studentController'

const app = Router();

app.get('/students',studentController.index);
app.get('/students/:id',studentController.show);
app.post('/students/',studentController.create);
app.put('/students/:id',studentController.update);
app.delete('/students/:id',studentController.delete);


export default app;