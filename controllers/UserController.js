const { USERS } = require("../constants")

exports.getUsers = (req, res) => {
    //get users from DB
    const data = JSON.stringify(USERS)
    res.end(data)
}