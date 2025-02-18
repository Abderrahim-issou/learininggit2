import express from 'express';
import CRUD from './goles/GoalsHandlers.js';

const golasRouter = express.Router();


    golasRouter.get('/getGols', CRUD.getAll)
    golasRouter.get('/getGoByid/:id', CRUD.getByID)
    golasRouter.post('/addGoal', CRUD.add)
    golasRouter.put('/updateGoal/:id', CRUD.update)
    golasRouter.delete('/deleteGoal/:id', CRUD.remove)

export default golasRouter; 