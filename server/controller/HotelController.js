const { Hotel } = require ("../models")
class Controller {
    static async getAllHotelPublic (req, res, next) {
        try {
            const hotels = await Hotel.findAll()
            console.log(hotels)
            res.status(200).json(hotels)
        } catch (error) {
            next(error)
        }
    }

    static async getAllHotel (req, res, next) {
        try {
            const hotels = await Hotel.findAll()
            res.status(200).json(hotels)
        } catch (error) {
            next(error)
        }
    }

    static async getHotelById (req, res, next) {
        try {
            const hotelId = req.params.id
            const hotel = await Hotel.findByPk(hotelId)
            if (!hotel) {
                throw { name: 'NotFound' }
            }
            res.status(200).json(hotel)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller