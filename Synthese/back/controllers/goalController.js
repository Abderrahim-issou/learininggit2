import GoalModel from '../models/goalModel.js';

export const getGoals = async () => {
    try {
        const stagiaires = await GoalModel.find();

        return stagiaires;
    } catch (error) {
        console.error("Error fetching Goals: ", error);
        return [];
    }
};

export const getGoalsById = async (id) => {
    try {
        const stagiaire = await GoalModel.findById(id);
        return stagiaire || 'Not Found';
    } catch (error) {
        console.error("Error fetching Goal: ", error);
        return 'Not Found';
    }
};

export const addGoal = async (goal) => {
    const { text } = goal;
    try {
        const newGoalModel = new GoalModel({ text });
        await newGoalModel.save();
        return "Added";
    } catch (error) {
        console.error("Error adding Goal: ", error);
        return "Error";
    }
};

export const deleteGoal = async (id) => {
    try {
        const result = await GoalModel.deleteOne({ _id: id });
        return result.deletedCount ? "Deleted" : "Error";
    } catch (error) {
        console.error("Error deleting Goal: ", error);
        return "Error";
    }
};

export const updateGoal = async (id, goal) => {
    const { text } = goal;
    try {
        const result = await GoalModel.updateOne({ _id: id }, { text });
        return result.nModified ? "Updated" : "Error";
    } catch (error) {
        console.error("Error updating Goal: ", error);
        return "Error";
    }
};


