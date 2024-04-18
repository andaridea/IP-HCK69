const express = require('express')
const Controller = require('./controller')
const HotelController = require("./controller/HotelController")
const authentication = require ("./middleware/authentication")
const errorHandler = require ("./middleware/errorHandler")
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', HotelController.getAllHotelPublic)
app.get('/pub/hotels', HotelController.getAllHotelPublic);
app.get('/pub/hotels/:id', HotelController.getHotelById);
app.post('/login', Controller.login)


app.use(authentication)
app.get('/hotels', HotelController.getAllHotel)



app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})