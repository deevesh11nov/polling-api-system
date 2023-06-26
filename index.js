const Port=3000
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.urlencoded())
// app.use(express.json())
const db=require('./config/mongoose');

// this is the initiator of the routing to different requests of the user with diff. url's
app.use('/',require('./routes/index'));
   


app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server is runing on port:",Port);
})