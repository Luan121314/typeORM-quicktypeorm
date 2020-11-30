import express from 'express';
import './database/connection';
import route from '../routes';


const app = express();
app.use(express.json());
app.use(route);

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Server running');
    
})


