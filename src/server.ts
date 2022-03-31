import cookieParser from 'cookie-parser';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import IUserController from './controllers/IUserController';



// Constants
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/users/:userName", IUserController.getUser)
app.post("/users/", IUserController.createUser)
app.delete("/users/:userName", IUserController.deleteUser)
app.put("/users/", IUserController.updateUser)



export default app;
