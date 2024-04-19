const { Order } = require ("../models")
class Controller {
    static async updateSubscribe (req, res, next) {
        try {
            await Order.update({isPaid: true}, {where: 
                {
                    id: req.user.id,
                },
            })
            res.status(200).json({message: "Successfully Paid"})
        } catch (error) {
            next(error)
        }
    }

    static async createOrder (req, res, next) {
        try {
            const { HotelId, UserId, orderId, totalPrice, isPaid, dateCheckIn, dateCheckOut } = req.body;
            const order = await Order.create({
                HotelId,
                UserId,
                orderId,
                totalPrice,
                isPaid,
                dateCheckIn,
                dateCheckOut
            });
            res.status(201).json(order)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller