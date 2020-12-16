import { Router } from 'express';
import classController from './controllers/classController';
import studentController from './controllers/studentController';
import lessonController from './controllers/lessonController';
import contentController from './controllers/contentController';

const app = Router();


app.get('/classes',classController.index);
app.get('/classes/:name',classController.show);
app.post('/classes/',classController.create);

app.get('/students',studentController.index);
app.get('/students/:name',studentController.show);
app.post('/students/',studentController.create);

app.get('/lessons',lessonController.index);
app.get('/lessons/:name',lessonController.show);
app.post('/lessons/',lessonController.create);

app.get('/contents',contentController.index);
app.get('/contents/:name',contentController.show);
app.post('/contents/',contentController.create);


export default app;