import jwt from "jsonwebtoken";
import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

const Register = async(req, res) =>{

    const { nom, email, password } = req.body;

    if (!nom, !email, !password) return res.status(400).send('all he fields are required');

    const foundUser = await UserModel.findOne({nom: nom}).exec();

    if(foundUser) return res.status(400).send('User already exists');

    try {
        const hashed = await bcrypt.hash(password, 10);

        const user = new UserModel({ nom, email, password: hashed});

        await user.save();

        return res.status(201).json({"msg": 'New Stuudent was created'});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('internal Server Error' + error.message);
    }
}

const Login = async(req, res) => {
    const { email, password } = req.body;

    if (!email, !password) return res.statu(400).send('all he fields are required');

    const foundUser = await UserModel.findOne({email: email}).exec();

    if(!foundUser) return res.status(400).send('User Doesnt exist exists');

    try {
        const match = await bcrypt.compare(password, foundUser.password);
        
        if(!match) return res.status(400).send('Incvalid password');

        const token = jwt.sign(
            {
                user: foundUser.nom,
                email: foundUser.email
            },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: '120s'
            }
        );

        const refreshToken = jwt.sign(
            {
                user: foundUser.nom,
            },
            process.env.REFRESH_TOKEN,
            {
                expiresIn: '1d'
            }
        );

        foundUser.resfreshToken = refreshToken;

        foundUser.save();

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
          });
        
        return res.status(201).send({token})
    } catch (error) {
        console.log('internal server error', error.message);
    }
}



export default { Register, Login} ;