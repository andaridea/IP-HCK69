const jwt = require('jsonwebtoken');
const secret = "verysecret";

const createToken = (payload) => {
    let token = jwt.sign(payload, secret);
    return token;
}

const verifyToken = (token) => {

    let payload = jwt.verify(token, secret);
    return payload;
}

module.exports = { createToken, verifyToken };