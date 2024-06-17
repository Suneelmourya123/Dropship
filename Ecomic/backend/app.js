const Express = require('express');
const app = Express();
const cors = require('cors');
app.use(Express.json())
app.use(cors())
app.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.send(req.body);
})
app.listen(5000,()=>{
    console.log('app is running on 5000');
})
console.log("object");