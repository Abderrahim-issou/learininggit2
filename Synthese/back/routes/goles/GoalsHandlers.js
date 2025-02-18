
import { getGoals, getGoalsById, addGoal, deleteGoal, updateGoal } from "../../controllers/goalController.js";


const getAll = async (req, res) => {
    const Gaols = await getGoals();
    res.send(Gaols);
};

const getByID = async (req, res) => {
    const id = req.params.id;
    const Goal = await getGoalsById(id);
    res.send(Goal);
};

const add = async (req, res) => {
    const { text } = req.body;
    const result = await addGoal({ text });
    res.send(result);
};

const update = async (req, res) => {
    const { text } = req.body;
    const id = req.params.id;
    const result = await updateGoal(id, { text });
    res.send(result);
};

const remove = async (req, res) => {
    const id = req.params.id;
    const result = await deleteGoal(id);
    res.json(result);
};

export default {getAll, getByID, add, update, remove};
