function errorHandler (err, req, res, next) {
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: err.errors[0].message })
    } else if (err.name === "InvalidInput") {
        res.status(400).json({ message: "Email and password is required" })
    } else if (err.name === "InvalidUser") {
        res.status(401).json({ message: "Email or password is invalid" })
    } else if (err.name === "NotFound") {
        res.status(404).json({ message: "Data not found" })
    }
}
module.exports = errorHandler