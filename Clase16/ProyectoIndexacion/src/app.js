import userModel from './models/user.model.js';
import express from 'express';
import mongoose from 'mongoose';

const mongoURL = 'mongodb://localhost:27017/tuBaseDeDatos';

const environment = async () => {
    await mongoose.connect(mongoURL);
    let response = await userModel.find({first_name:"Celia"}).explain('executionStats');
    console.log(response);
}

environment();