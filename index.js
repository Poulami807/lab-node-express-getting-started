// setting up node server

/*
var http = require('http')
http.createServer((req,res)=>{
    res.write('Hello')
    res.end()
}).listen(8000,console.log('server is running'))
*/

//setting up express server
var express = require('express')
var app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/test',(req,res)=>{
    let data = [{
        name:'Poulami',
        id:1,
        age:21
    },
    {
        name:'XYZ',
        id:2,
        age:21
    }]
    // res.send(data)
    res.json({data, Message:'Received'})
})
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.listen(8000,console.log('Server is running'))