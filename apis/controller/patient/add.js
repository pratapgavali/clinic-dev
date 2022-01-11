// const { getInstance } = require("../../utils/database");

const { getCollection } = require("../../utils/database");


module.exports = {
    add: async (data, reqUser, callback)=>{
        try {

            // const patientCollection = await getCollection("patient");
            console.log("Inside add patient");
            var patientCollection = await getCollection('patient')
            var data = await patientCollection.find().toArray();
            // console.log("from add patient",data);
            callback(data)
            
        } catch (error) {
            console.log(error);
            return callback("Something went wrong")
            
        }

    }
}