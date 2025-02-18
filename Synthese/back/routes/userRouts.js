

import express from 'express';
import  authHandler from '../controllers/authController.js';

const loginRouter = express.Router();


loginRouter.post('/login', authHandler.Login);

const registerRouter = express.Router();


registerRouter.post('/register', authHandler.Register);

export default {loginRouter, registerRouter};