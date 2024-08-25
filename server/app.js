const express=require('express')

const app=express();

const dotenv = require('dotenv')
const path = require('path')

const cors = require('cors')


const connectDatabase = require('./config/connectDatabase')
dotenv.config({path: path.join(__dirname,'config','config.env')})



const products = require('./routes/product')
const orders = require('./routes/order')

connectDatabase();


//MiddelWare
app.use(express.json())
app.use(cors())

app.use('/api/v1/',products)
app.use('/api/v1/',orders)



// server port 
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} ${process.env.NODE_ENV}`)
})


