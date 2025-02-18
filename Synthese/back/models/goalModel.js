import mongoose from "mongoose";


const goalSchma = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Ajouter un nom'],
    }
},{
    timestamps: true
}
);

const GoalModel = mongoose.model('Goal', goalSchma);
export default GoalModel;