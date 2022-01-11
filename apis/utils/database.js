var {MongoClient, ObjectId} = require('mongodb');
var url = "mongodb://localhost:27017/testdevdb";
var dbInstance;

module.exports = {

    dbConnect: async (callback) => {
        MongoClient.connect(url, async (err, db) => {
            if (err) return callback("Failed to connect DB", err);
            dbInstance = db.db('testdevdb')
            return callback("db connected");
            // db.close();
        });
    },

    getCollection: async(name)=>{
        var collection = dbInstance.collection(name);
        return collection;
        // var data = await collection.find().toArray();
        // console.log(data);
    },

    getObjectId: async(id)=>{
        return ObjectId(id);
    }

}
