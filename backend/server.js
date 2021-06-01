import express from 'express'
import data from './data'
import cors from 'cors'
import config from './config'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter'
import mongoose from 'mongoose'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
dotenv.config()
const mongodbUrl = config.MONGODB_URL
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log('Server Error is ' + error))

mongoose.connection
  .once('open', function () {
    console.log('connected')
  })
  .on('error', function (error) {
    console.log(`Not Connected: ${error}`)
  })

let PORT = process.env.PORT

app.use('/api/users', userRouter)
app.use('/api/editproduct', userRouter)

app.get('/', (reg, res) => {
  res.send('Integro Wears')
})

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id
  const product = data.products.find((x) => x.id === id)
  if (product) res.send(product)
  else res.status(404).send({ msg: 'Product Not Found..' })
})

app.get('/api/products', (req, res) => {
  res.json(data.products)
})

if (PORT == null || PORT == '') {
  PORT = 5000
}

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}...`)
})
