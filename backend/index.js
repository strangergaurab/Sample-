const express = require('express');
const app = express();

app.get("/",(req,resp)=>{
    resp.send("app is working.....,My name is gaurab Shrstha");

});

app.listen(5000);
