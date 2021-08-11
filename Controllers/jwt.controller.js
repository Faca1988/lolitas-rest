const  jwt = require('jsonwebtoken');   

module.exports.jwtSign = async (payload, accessKey) => {
    return await jwt.sign(payload,accessKey); 
}