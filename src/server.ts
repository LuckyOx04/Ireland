import cookieParser from 'cookie-parser';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import AlcoholBeveragesController from './controllers/AlcoholBeveragesController';
import JWTController from './controllers/JWTController'

const bodyParser = require("body-parser");

import IUserController from './controllers/IUserController';



// Constants
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

var cors=require('cors');

app.use(cors({origin:true,credentials: true}));

app.get("/users/:userName", JWTController.authenticateToken, IUserController.getUser)
app.get("/users/", JWTController.authenticateToken, IUserController.getAllUsers)
app.post("/users/", IUserController.createUser)
app.delete("/users/:userName", JWTController.authenticateToken, IUserController.deleteUser)
app.put("/users/", JWTController.authenticateToken, IUserController.updateUser)

app.post("/alcohols/", JWTController.authenticateToken, AlcoholBeveragesController.createAlcoholicBeverage)
app.get("/alcohols/:category/:name", JWTController.authenticateToken, AlcoholBeveragesController.getAlcoholicBeverageByCategoryAndName)
app.get("/alcohols/:category/", JWTController.authenticateToken, AlcoholBeveragesController.getAlcoholicBeverageByCategory)
app.get("/alcohols/", JWTController.authenticateToken, AlcoholBeveragesController.getAllAlcoholicBeverages)
app.put("/alcohols/:category/:name/:quantity", JWTController.authenticateToken, AlcoholBeveragesController.updateAlcoholicBeverage)
app.delete("/alcohols/:category/:name/:quantity", JWTController.authenticateToken, AlcoholBeveragesController.deleteAlcoholicBeverage)

app.post("/auth/createToken/", JWTController.generateToken)

export default app;
