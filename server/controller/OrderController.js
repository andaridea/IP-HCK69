const { Order } = require ("../")
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
}
module.exports = Controller