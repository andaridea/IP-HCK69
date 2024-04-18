const express = require('express')
const Controller = require('./controller')
const HotelController = require("./controller/HotelController")
const authentication = require ("./middleware/authentication")
const errorHandler = require ("./middleware/errorHandler")
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.get('/', HotelController.getAllHotelPublic)
app.get('/hotels/:id', HotelController.getHotelById);
app.post('/login', Controller.login)

app.use(authentication)
app.get('/hotels', HotelController.getAllHotel)




app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})