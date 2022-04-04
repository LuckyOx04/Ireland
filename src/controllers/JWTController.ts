import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export let generateToken = async(req: Request, res: Response) => {

    const {username, password}: {username: string, password: string} = {...req.body}

    prisma.user.findFirst({
      where: {
        username: username
      }
    }).then((user) => {
      if(user?.password == password){
        const token = generateAccessToken(username)
        res.status(200).send({status: token})
      } else {
        res.status(400).send({status: "Error"})
      }
    }).catch((_) => {
      res.status(400).send({status: "Error"})
    })

}

 let generateAccessToken = (username: string) => {
    return jwt.sign(username,"Secret");
}

let authenticateToken = (req: Request, res: Response, next: CallableFunction)  => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, "Secret", (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
  
      next()
    })
  }

  export default {
      authenticateToken,
      generateToken
  }