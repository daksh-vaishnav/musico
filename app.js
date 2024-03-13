const express = require("express");
require('dotenv').config()


const app = express()



app.get("/",(req,res)=>{
    res.send("hello world")
})




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`app is up and running on http://localhost:${PORT}`);
})