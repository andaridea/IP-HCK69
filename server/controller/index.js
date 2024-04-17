const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();

class Controller {
    static async login(req,res,next) {
        try {
            const { google_token } = req.headers;
            console.log(google_token)
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: "507837005559-ofrc326qv9vnu2802ihntvdqg2tc11i1.apps.googleusercontent.com",
            });
            console.log(ticket, "<<<<")
            // const payload = ticket.getPayload();
            // const userid = payload['sub'];
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
module.exports = Controller