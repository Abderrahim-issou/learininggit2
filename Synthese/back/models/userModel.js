import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, 'Ajouter le nom']
    },
    email: {
        type: String,
        required: [true, 'Ajouter email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Ajouter password'],
        unique: true
    },
    resfreshToken: {
        type: String,
        default: ''
    }
  },{
    timestaps: true
  }
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;