import { Request, Response } from "express"
import { connection } from "../data/connection";

export const login = async (req: Request, res: Response) => {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 406
         throw new Error(" 'email' e 'password' são obrigatórios")
      }

      const result = await connection.raw(`
         SELECT * FROM aula50_users
         WHERE email = "${email}"
      `)

      const user = result[0]

      if (!user || user.password !== password) {
         res.statusCode = 404
         throw new Error("Usuário ou senha inválidos")
      }

      res.status(200).send({
         message: 'Usuário logado',
         token: user.id
      });

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send("Um erro inesperado ocorreu =/")

      else
         res.send(error.message)
   }
};