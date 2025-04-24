const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const users =[
    {name:'mehedi', Roll:5645},
    {name:'mahadi', Roll:56454},
]
app.get('/',(req,res)=>{
    res.send('gotcha bruh!')
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.listen(port,()=>{
    console.log(port)
})