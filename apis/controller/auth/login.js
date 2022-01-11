const { getCollection } = require("../../utils/database")

module.exports = {
    login : async (data, callback)=>{
        
        try {

            var userToFind = {}
        
            if(data.email){
                userToFind.email = data.email
            }
            if(data.mobileNo){
                userToFind.mobileNo = data.mobileNo
            }
    
            userToFind.password = data.password
    
            const userCollection = await getCollection('user');
    
            var userData = await userCollection.findOne(userToFind);
            if(userData){
                callback(userData)
            }else{
                callback("Sorry user not found");
            }
            
        } catch (error) {
            console.log(error);
            callback("something went wrong")
        }
        
    }
}