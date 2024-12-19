//Create a http server
//Express is the library we will use to make a http server

const express =require("express"); //This we will have to bring it from the internet run the command
// use npm install express


const bodyparser = require("body-parser");
const app = express();

//middlewares  -- otherwise cannot read the body 
app.use(bodyparser.json({}));
const port = 3001

///const port = process.env.port  || 3005
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})


app.post("route-handlers",function(req,res){
    res.send("Hello World")
    res.json({
        name : "Manvendra",
        age : 12
    })
})

// //Alternate way
app.get('/',function(req,res){

    res.send();
})

app.post('/conversations',(req,res) =>{
    console.log(req.headers["authorization"])
    console.log(req.body);
    res.send("Hello from the backend");
})

fetch()

//Will  be listening on port 




// npx nodemon index.js -- So that no need to restart the again and again the backend