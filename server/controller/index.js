const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
const { User } = require("../models/index");
const { createToken } = require('../helpers/jwt');

class Controller {
    static async login (req,res,next) {
        try {
            const { google_token } = req.headers;
            console.log(google_token)
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: "507837005559-ofrc326qv9vnu2802ihntvdqg2tc11i1.apps.googleusercontent.com",
            });
            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({ 
                where: {email: payload.email},
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
            console.log(error)
            next(error)
        }
    }
}
module.exports = Controller