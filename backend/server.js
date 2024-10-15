const express= require('express');

const app=express();

const port=5000;

app.listen(3000,()=>{
    console.log(`Server running on port ${port}`)
})