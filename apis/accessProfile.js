const { ALL, RESTRICTADE } = require("./roles");

module.exports={

    checkAccess: async (action)=>{
        switch (action) {

            case "user.login":
                return ALL
                break;

            case "user.register":
                return ALL
                break;

            case "patient.add":
                return ALL
                break;

            default:
                return[];
        }

    }
    

}