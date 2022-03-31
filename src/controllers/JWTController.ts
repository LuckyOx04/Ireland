import { Request, Response } from "express";
import jwt from "jsonwebtoken"

export let generateToken = async(req: Request, res: Response) => {

    const token = generateAccessToken(req.params.userName)
    res.status(200).send({status: token})

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