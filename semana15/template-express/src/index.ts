import express, {Express, Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/countries/:id', (req:Request, res:Response) =>{
    const result = countries.find(
        (country)=>{return country.id === Number(req.params.id)}
    )

    res.send(result)
})

app.get('/countries', (req:Request, res:Response) => {
    
    // console.log(req.headers)
    // console.log(req.query)
    
    res.send(countries)
})

app.listen(3003, () => {
    console.log('servidor pronto!')
})
