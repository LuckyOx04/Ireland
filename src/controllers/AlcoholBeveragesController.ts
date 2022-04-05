import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { AlcoholicEnum } from "@models/Alcoholics/AlcoholicEnum";

const prisma = new PrismaClient();

export let createAlcoholicBeverage = async (req: Request, res: Response) => {

    const {
        category,
        name,
        quantity,
        picture,
        description,
        price, 
        available
    }: {category: string, name: string, quantity: number, description: string, picture: string, price: number, available: boolean} = {...req.body}


    prisma.alcoholicBeverage.create({
        data: {
            category: category,
            name: name,
            quantity: quantity,
            description: description,
            price: price,
            available: available,
            picture: picture,
        }
    }).then((_) => {
        res.status(200).send({status: "OK"})
    }).catch((_) => {
        res.status(400).send({status: "ERROR"})
    })

}

export let getAlcoholicBeverageByCategory = async (req: Request, res: Response) => {

    let categoryName = req.params.category

    prisma.alcoholicBeverage.findMany({
        where: {
            category: categoryName,
        }
    }).then((beverages) => {
        res.status(200).send({result: beverages})
    })
}

export let getAlcoholicBeverageByCategoryAndName = async (req: Request, res: Response) => {

    let categoryName = req.params.category
    let name = req.params.name

    prisma.alcoholicBeverage.findMany({
        where: {
            category: categoryName,
            name: name
        }
    }).then((beverages) => {
        res.status(200).send({result: beverages})
    })
}

export let getAllAlcoholicBeverages = async (req: Request, res: Response) => {

    prisma.alcoholicBeverage.findMany({}).then((beverages) => {
        res.status(200).send({result: beverages})
    })
}

export let deleteAlcoholicBeverage = async (req: Request, res: Response) => {

    const {
        category,
        name,
        quantity,
    }: {category: string, name: string, quantity: number} = {...req.body}

    prisma.alcoholicBeverage.findFirst({
        where: {
            category: category,
            name: name,
            quantity: quantity
        }
    }).then((beverage) => {
        prisma.alcoholicBeverage.delete({
            where: {
                id: beverage?.id
            }
        }).then((_) => {
            res.status(200).send({result: "OK"})
        })
    }).catch((_) => {
        res.status(400).send({result: "ERROR"})
    })

}

export let updateAlcoholicBeverage = async (req: Request, res: Response) => {

    let categoryName = req.params.category
    let productName = req.params.name
    let productQuantity: number = parseInt(req.params.quantity)

    const {category, name, quantity}: {category: string, name: string, quantity: number} = {...req.body}

    prisma.alcoholicBeverage.findFirst({
        where: {
            category: categoryName,
            name: productName,
            quantity: productQuantity
        }
    }).catch((err) => {
        res.status(400).send({status: "ERROR"})
    })
    .then((beverage) => {
        if(beverage != null){
            prisma.alcoholicBeverage.update({
                where: {
                    id: beverage.id
                },
                data: {
                    category: category,
                    name: name,
                    quantity: quantity
                }
            }).then((_) => {
                res.status(200).send({status: "OK"})
            }).catch((_) => {
                res.status(400).send({status: "ERROR"})
            })
        }
        
    })
    
   
}
 

export default {
    createAlcoholicBeverage,
    getAlcoholicBeverageByCategory,
    getAlcoholicBeverageByCategoryAndName,
    updateAlcoholicBeverage,
    deleteAlcoholicBeverage,
    getAllAlcoholicBeverages,
}
