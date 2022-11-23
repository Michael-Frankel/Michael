require('dotenv').config()

import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI

console.log(process.env.ENV);

app.use(express.static('client/build'))
app.use(express.json());

mongoose.connect(MONGODB_URI)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

import userRouter from './routers/userRouter'
app.use('/api/user', userRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});