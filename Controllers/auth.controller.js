const { getUserData } = require("./dbQueries.controller");
const { jwtSign } = require("./jwt.controller");
const { configs } = require("../Configs/config");

module.exports.authValidation = async(user, pass) => {
    const dbUserData = getUserData(user);

    const payload = {
        id: dbUserData.id,
        user: dbUserData.user,
        pass: dbUserData.pass
    }

    const accessKey = configs._AccessKey;
    
    //return (dbUserData.user === user &&  dbUserData.pass === pass);
    if (dbUserData.user === user &&  dbUserData.pass === pass){
        return await jwtSign(payload,accessKey)
    }
    throw 'Token Failure'
}