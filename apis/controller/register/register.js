const { getCollection, getObjectId } = require("../../utils/database")

module.exports = {
    register: async (data,callback)=>{

        try {

            const userCollection = await getCollection('user');
            const orgCollection = await getCollection('organization');
            const doctorCollection = await getCollection('doctor');
            
            const organizationObj = {
                name:data.name,
                address: data.orgAddress,
                email : data.email,
                active : true,
                createdOn : new Date(),
            }
    
            console.log("Organization...", organizationObj);

            var orgData = await orgCollection.insertOne(organizationObj);
    
            const doctorObj = {
                firstName : data.firstName,
                lastName : data.lastName,
                email : data.email,
                password : data.password,
                mobileNo: data.mobileNo,
                orgId : orgData.insertedId,
                dob : new Date(data.dob),
                speciality : await getObjectId(data.speciality),
                subSpeciality : data.subSpeciality, 
                role : "doctor",
                address: data.address,
                createdOn: new Date(),
                active: true,
            }
            console.log("Doctor Object",doctorObj);
            var docotorData = await doctorCollection.insertOne(doctorObj)
    
            var doctorList = [];
            doctorList.push(docotorData.insertedId)
    
            const userObj = {
                firstName : data.firstName,
                lastName : data.lastName,
                email : data.email,
                password : data.password,
                mobileNo: data.mobileNo,
                dob : new Date(data.dob),
                orgId : orgData.insertedId,
                defaultDoctor : doctorList, 
                opdType : await getObjectId(data.speciality),
                role : "admin", 
                address: data.address,
                createdOn: new Date(),
                active: true,
            }
    
            console.log("User object",userObj);
            var userData = await userCollection.insertOne(userObj); 
    
            return callback("new user "+data.firstName+ " "+data.lastName+" and clinic "+data.name)
            
        } catch (error) {
            console.log(error);
            callback("something went wrong!")
        }
        
    }
}