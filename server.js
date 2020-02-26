const express = require("express");
const next = require("next");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const axios = require('axios');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
console.log("enviroment",process.env.Base_URL)

const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

server.use(cookieParser());

const {BASE_URL} = process.env


app.prepare().then(() => {
  console.log("preparing...................................")



  server.get("/", (req, res) => {

    const auth = req.cookies["AUTHCHECKSUM"]

    if(auth){
  axios.get("http://192.168.225.68:31030/auth/v1/session",{ 
  headers:{ 
    "Content-Type":"application/json",
    "JS-Client-Ip":"",
"JS-Client-Url":"",
"JS-User-Agent":"",
"JS-Internal":"",
"JS-Profile-Identifier":auth
  }


}).then(({data:{data:{allowed}}})=>{
 
if(!allowed){
 return res.redirect(`${BASE_URL}/myjs`)
}
return app.render(req, res, "/", req.query);
}).catch(err=>console.log("error",err))
    }
    else{
      return app.render(req, res, "/", req.query);
    }
    
  
  });

  // server.get("/b", (req, res) => {
  //   return app.render(req, res, "/b", req.query);
  // });

  // server.get("/posts/:id", (req, res) => {

  //   return app.render(req, res, "/posts", { id: req.params.id });
  // });

  // server.get("/posts/", (req, res) => {

  //   return app.render(req, res, "/posts");
  // });

  server.all("*", (req, res) => {
    
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
