const { User } = require ("../models")
const { verifyToken } = require ("../helpers/jwt")

const authentication = async (req, res, next)  => {
    try {
        let access_token = req.headers.authorization;   

        if(!access_token){
            res.status(401).json({message: "Invalid Token"});
            return;
        }

        let [bearer, token] = access_token.split(" ");

        if(bearer !== "Bearer") {
            throw {name: "InvalidToken"}
        }

        let payload = verifyToken(token)

        if (!payload){
            throw {name: "InvalidToken"}
        }

        let user = await User.findByPk(payload.id)

        if(!user) {
            throw {name: "InvalidToken"}
        }

        req.user = {
            id: user.id,
        }
        next()
    } catch (error) {
        next (error)
    }
}
module.exports = authentication