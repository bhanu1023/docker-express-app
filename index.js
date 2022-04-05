const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config")
const mongoose = require('mongoose');
const cors = require("cors")

const postRouter = require("./routes/postRoute")

const mongourl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

app.enable('trust proxy')

connectWithRetry = () =>{
  mongoose.connect(mongourl,{
    useNewUrlParser: true,
  }
  ).then(() => console.log("connection success"))
  .catch((e)=>{
    console.log(e)
    setTimeout(connectWithRetry,5000);
  })
}


connectWithRetry()

app.use(cors({}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.use("/api/v1/posts",postRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})