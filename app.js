import express from 'express'
import pool from './db.js';
const app = express();

app.get('/products',(req , res)=>{
    res.json("hello products")
})

app.get('/contact',(req , res)=>{
    res.json("contact page")
})

app.get('/about',(req , res)=>{
    res.json("about page")
})
 
pool.query("SELECT now()", (error , result) => {
    if(error){
        console.log("Database failed to connect", error)
    } else {
        console.log("Database connected successfully", result.rows)
    }
}) 
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});







