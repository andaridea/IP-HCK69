const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();
const { User, Order } = require("../models/index");
const { createToken } = require('../helpers/jwt');
const midtransClient = require('midtrans-client')

class Controller {
    static async login(req, res, next) {
        try {
            const { google_token } = req.headers;
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: "507837005559-ofrc326qv9vnu2802ihntvdqg2tc11i1.apps.googleusercontent.com",
            });
            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    name: payload.name,
                    email: payload.email,
                    password: String(Math.random() * 1000),
                    profilePicture: payload.picture
                }
            })
            const access_token = createToken({ id: user.id, email: user.email })

            res.status(200).json({ access_token })
        } catch (error) {
            next(error)
        }
    }
    static async getUser(req, res, next) {
        try {
            const userId = req.user.id
            const user = await User.findByPk(userId)
            res.status(200).json({user})
        } catch (error) {

        }
    }
    static async generateMidtransToken(req, res, next) {
        try {
            // const { id, totalPrice, checkIn, checkOut } = req.body;
            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });

            const orderId = Math.random().toString()

            let parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": 10_000
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "name": req.user.name,
                    "email": req.user.email,
                }
            }

            const transaction = await snap.createTransaction(parameter)
            let transactionToken = transaction.token;

            // await Order.create({
            //     orderId,
            //     totalPrice,
            //     dateCheckIn: checkIn,
            //     dateCheckOut: checkOut,
            //     UserId: req.user.id,
            //     HotelId: id
            // })
            res.status(200).json({message: "Successfully paid"}, transactionToken)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller