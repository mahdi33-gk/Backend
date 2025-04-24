const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())


const users =[
    {id:1, name:'mehedi', Roll:5645},
    {id:2, name:'mahadi', Roll:56454},
]
app.get('/',(req,res)=>{
    res.send('gotcha bruh!')
})
app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    console.log('api hitiint')
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(port,()=>{
    console.log(port)
})