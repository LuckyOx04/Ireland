import cookieParser from 'cookie-parser';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import AlcoholBeveragesController from './controllers/AlcoholBeveragesController';
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

app.post("/alcohols/", AlcoholBeveragesController.createAlcoholicBeverage)
app.get("/alcohols/:category/:name", AlcoholBeveragesController.getAlcoholicBeverageByCategoryAndName)
app.get("/alcohols/:category/", AlcoholBeveragesController.getAlcoholicBeverageByCategory)
app.get("/alcohols/", AlcoholBeveragesController.getAllAlcoholicBeverages)
app.put("/alcohols/:category/:name/:quantity", AlcoholBeveragesController.updateAlcoholicBeverage)
app.delete("/alcohols/:category/:name/:quantity", AlcoholBeveragesController.deleteAlcoholicBeverage)

export default app;
