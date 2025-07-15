import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());
dotenv.config();


const PORT = process.env.PORT || 7000;
const MONGOURL= process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(()=> {
    console.log("DB connected successfully.")
    app.listen(PORT,() => {
        console.log('Server is Listening on Port:', PORT)
    })
})
.catch((error) =>  console.log("error from server creation or mongoose", error));

app.use('/api', route);