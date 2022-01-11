const express = require("express");
const { dbConnect } = require("./utils/database");
const cors = require("cors")
const { checkAccess } = require("./accessProfile");
const { handleRequest } = require("./router");
const app = express();
const port = 8000;
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
const LoginAction = "user.login";
const RegisterAction = "user.register";

// app.use(cors({ origin: '*' }));

app.post("/api", async (req, res) => {
    console.log(req.body);
    const action = req.body.action
    const role = req.body.role
    const reqUser = req.body.reqUser ? req.body.reqUser : null;
    const accessRoles = await checkAccess(action);
    if ((action != LoginAction || action != RegisterAction) && accessRoles.includes(role)) {
        handleRequest(req.body, reqUser, (respose) => {
            return res.json(respose)

        })
    } else if (action == LoginAction || action == RegisterAction) {
        handleRequest(req.body, reqUser, (respose) => {
            return res.json(respose)

        })
    } else {
        res.status(403).send("Sorry you don't have a access")
    }
})


app.listen(port, async () => {
    await dbConnect((res) => {
        console.log("connected DB...", res);
    })
    console.log("Hello app is listening to", port);
})