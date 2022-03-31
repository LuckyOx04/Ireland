import cookieParser from 'cookie-parser';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
const bodyParser = require("body-parser");

import IUserController from './controllers/IUserController';



// Constants
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/users/:userName", IUserController.getUser)
app.get("/users/", IUserController.getAllUsers)
app.post("/users/", IUserController.createUser)
app.delete("/users/:userName", IUserController.deleteUser)
app.put("/users/", IUserController.updateUser)



export default app;
