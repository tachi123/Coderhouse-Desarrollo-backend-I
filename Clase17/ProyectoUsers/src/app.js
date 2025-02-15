import userModel from './models/user.model.js';
import mongoose from 'mongoose';

const mongoURL = 'mongodb://localhost:27017/tuBaseDeDatos';

const environment = async () => {
    await mongoose.connect(mongoURL);
    let users = await userModel.paginate(
        { gender: "Female"},
        { limit: 20, page: 1});
        
    console.log(users);
}

environment();