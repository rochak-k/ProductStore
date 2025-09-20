import express from 'express';
import dotenv from 'dotenv';
import  path  from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js';
dotenv.config();

const app = express();
const port = 3010;
const __dirname = path.resolve()
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api/products', productRoutes); // Use the products route for handling requests to /api/products
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../Frontend/dist')));
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'..Frontend','dist','index.html'))
    }
)}
app.listen(port,()=>{
    connectDB();
    console.log(`MongoDB connected`);
    console.log(`Server is running on http://localhost:${port}`);
})
// app.listen() is the function that starts your web server and makes it listen for incoming requests on a specific port (and optionally a host)
//sql database stores data in tables, while MongoDB stores data in flexible, JSON-like documents
// 131eKBrvH59Y4fkR
// rochakkhatiwada
//17 : 00
//45:00