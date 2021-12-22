var express = require("express")
var app = express()
var router = express.Router()


const checkDate=((request, response, next) => {
    
        let dt = Date.now()
        let dateConn = new Date(dt)
        if (dateConn.getDay()==0 || dateConn.getDay()==6 || 
        dateConn.getHours()<9 || dateConn.getHours()>18){
        response.send('You are outside working hours ');
        return;
        }
        next();
     
    
})

app.use(checkDate)
app.get('/', (request, response) => {
    response.sendFile(__dirname+"/pages/home.html")
});
app.get('/contact', (request, response) => {
    response.sendFile(__dirname+"/pages/contact.html")
});
app.get('/services', (request, response) => {
    response.sendFile(__dirname+"/pages/services.html")
});



app.listen(5000, ()=>{
    console.log('Running on port 5000');
})


