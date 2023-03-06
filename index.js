const http = require("http");
const { getUsers } = require("./controllers/UserController")
const { HOSTNAME, PORT } = require("./constants")

const server = http.createServer((req, res) => {

    const url = req.url

    switch (url) {
        case "/users":
            getUsers(req, res)
            break;
        default:
            res.end("URL NOT FIND");
            break;
    }
});
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});