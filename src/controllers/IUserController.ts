
// User schema

import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

const prisma = new PrismaClient();

export let getUser = async (req: Request, res: Response) => {
    let user = req.params.userName;

    prisma.user.findUnique({
        where: {
            username: user
        }
    }).then((user) => {
        res.status(200).send({user: user})
    }).catch((_) => {
        res.status(400).send({status: "Error"})
    })
}

export let createUser = async (req: Request, res: Response) => {
    const {username, password}: {username: string, password: string} = {...req.body}

    prisma.user.create({
        data: {
            username: username,
            // Wont encrypt passwords for now, I think i'll be encrypting them on the frontend.
            password: password
        }
    }).then((_) => {
        res.status(200).send({status: "OK"})
    }).catch((err: PrismaClientKnownRequestError) => {
        if(err.code == "P2002"){
            res.status(409).send({status: "User already exists with this username."})
        }
    }).catch((_) => {
        res.status(400).send({status: "Error"})
    })
}

export let deleteUser = async(req: Request, res: Response) => {
    const {username}: {username: string} = {...req.body}

    prisma.user.delete({
        where: {
            username: username
        }
    }).then((_) => {
        res.status(200).send({status: "OK"})
    }).catch((_) => {
        res.status(400).send({status: "Error"})
    })
}

export let updateUser = async(req: Request, res: Response) => {
    const {username, password}: {username: string, password: string} = {...req.body}
    prisma.user.update({
        where: {
            username: username
        },
        data: {
            username: username,
            password: password

        }
    }).then((_) => {
        res.status(200).send({status: "OK"})
    }).catch((_) => {
        res.status(400).send({status: "Error"})
    })

}

export let getAllUsers = async(req: Request, res: Response) => {

    prisma.user.findMany({}).then((result) => {
        res.status(200).send({result: result})

    })
}



// dunno if we need the 2 functions.



/**
 * Copy a user object.
 * 
 * @param user 
 * @returns 
 */
function copy(user: IUser): IUser {
    return {
        id: user.id,
        username: user.username,
        password: user.password
    }
}


/**
 * Get a new User object.
 * 
 * @returns 
 */
 function getNew(username: string, password: string): IUser {
    return {
        id: -1,
        username,
        password: password
    };
}


// Export default
export default {
    new: getNew,
    copy,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
}
