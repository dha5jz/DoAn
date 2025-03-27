const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
dotenv.config()

const cors = require('cors');

const app = express()
const port = process.env.PORT 

app.get('/', (req, res) => {
    res.send('Hello World! hihi')
  })

app.use(cors())
app.use(bodyParser.json());  
routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{
        console.log('connect success')
    })
    .catch((err) =>
    {
        console.log(err)
    })


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})