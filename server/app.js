const express = require("express");
const bodyparser = require("body-parser");
const mongo = require("mongoose")



const app = express();

app.set("view engine","pug");
app.set("views","./views");


app.use("/static",express.static("static"));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())



app.get("/",(req,res)=>{
   res.render("home")
})

app.get("/report-cat",(req,res)=>{
    res.render("reportform")
})
app.get("/about-us",(req,res)=>{
    res.render("about-us")
})


// Port 8080
app.listen(8080,function(){
    console.log("running on localhost:8080/");
})