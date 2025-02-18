import express from 'express';
import dotenv from 'dotenv';
import mongoose, { connect } from 'mongoose';
import golasRouter from './routes/goalRoutes.js';
import userRouts from './routes/userRouts.js';
import VerifyToken from './middleWare/VerifyToken.js';
import DBconnect from './config/Dbconnection.js';
import cors from 'cors';


dotenv.config();


DBconnect()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/goals', VerifyToken, golasRouter);
app.use('/auth', userRouts.loginRouter);
app.use('/auth', userRouts.registerRouter);

mongoose.connection.once('open',()=>{
    console.log('connected to mongoDb');
    app.listen(process.env.PORT, ()=> {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})



