const express =  require('express');
const app = express();
const {router} = require('./route');
app.use(router);

app.listen(5000,()=>{
    console.log("App Running");
})