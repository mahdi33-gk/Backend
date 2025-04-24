const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())


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