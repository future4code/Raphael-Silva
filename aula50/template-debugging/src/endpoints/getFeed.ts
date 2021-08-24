import { Request, Response } from "express";
import { connection } from "../data/connection";
import { feedItem } from "../types";

export async function getFeed(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const token = req.headers.authorization as string

      const page: number = Number(req.query.page) || 0

      if (!token) {
         res.statusCode = 401
         throw new Error("Token inválido")
      }

      const offset = 10 * page

      const result = await connection.raw(`
         SELECT recipes.*, users.name
         FROM aula50_recipes AS recipes
         JOIN aula50_users AS users
         ON users.id = recipes.user_id
         ORDER BY title
         LIMIT 10
         OFFSET ${offset}
      `)

      const feed = result[0].map(toFeedItem)

      res.status(200).send(feed)

   } catch (error) {
console.log(error);

      if (res.statusCode === 200)
         res.status(500).send("Um erro inesperado ocorreu =/")

      else
         res.send(error.message)
   }
}

const toFeedItem = (input: any): feedItem => input && {
   id: input.id,
   title: input.title,
   authorId: input.user_id,
   authorName: input.name,
}