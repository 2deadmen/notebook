const connectToMongo=require('./db');
const express = require('express')  
connectToMongo();



const app = express()
const port = 3001

app.use(express.json())
//index route
app.get('/',(req,res)=>{
  obj={
    n:"xdbd"
  }
  res.send(obj)
})

//routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})