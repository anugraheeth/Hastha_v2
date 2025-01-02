import express from 'express'
import dotenv from 'dotenv'
import dbCon from './Utils/db1.js'
import dbCon2 from './Utils/db2.js'
import Routes from './Routes/Auth.js'
import cors from 'cors'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    credentials : true,
    origin : 'http://localhost:5173'
}))

app.use(express.json())


app.use('/api/auth',Routes)


app.get('/',(req,res)=>{
    res.send("test")
})

app.listen(PORT,()=>{
    console.log("server is running")
})