const loginController  = require("../controller/auth");
const patientController = require("../controller/patient");
const registerController = require("../controller/register")
module.exports = {
    handleRequest: async (data, reqUser, callback) => {

        const actionArr = data.action.split(".")

        switch (actionArr[0]) {

            case "patient":
                switch (actionArr[1]) {
                    case "add":
                        patientController.add(data.data, reqUser, (res) => { return callback(res) })
                        break;

                    default:
                        break;
                }
                break;

            case "user":
                switch (actionArr[1]) {
                    case "register":
                        registerController.register(data.data, (res) => { return callback(res) })
                        break;

                    case "login":
                        loginController.login(data.data, (res) => { return callback(res) })
                        break;

                    default:
                        break;
                }

            default:
                break;
        }
    }
}