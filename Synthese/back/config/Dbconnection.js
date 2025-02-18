import mongoose from 'mongoose';
import { config } from "dotenv";
config();

let connected = true;


const DBconnect = async () => {
    await mongoose.connect(process.env.DB_URI)
    .then(() => console.log('Connected to mongo db'))
    .catch( err => console.log('error while connecting to mongo db', err.message));
}
export const connect = () => {
        if(connected){
            DBconnect();
            connect = false;
        }
    }

export default DBconnect;