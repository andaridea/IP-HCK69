if (process.env.NODE_ENV !== "production"){
  require('dotenv').config()
}
require('dotenv').config()
const express = require('express')
const Controller = require('./controller')
const HotelController = require("./controller/HotelController")
const OrderController = require("./controller/OrderController")
const authentication = require ("./middleware/authentication")
const errorHandler = require ("./middleware/errorHandler")
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.get('/', HotelController.getAllHotelPublic)
app.get('/pub/hotels/:id', HotelController.getPublicHotelById);
app.post('/login', Controller.login)

app.use(authentication)
app.get('/profile', Controller.getUser)
app.get('/hotels', HotelController.getAllHotel)
app.post('/generate-midtrans-token', Controller.generateMidtransToken)
app.post('/orders', OrderController.createOrder)
app.get('/hotels/:id', HotelController.getHotelById);




app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})