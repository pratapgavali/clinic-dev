const { getCollection } = require("../../utils/database");

module.exports = {
    add: async (data, reqUser, callback) => {
        console.log(data);

        console.log("Inside add patient");
        var patientCollection = await getCollection('patient')
        var data = await patientCollection.find().toArray();
        return callback(data)
    }
}