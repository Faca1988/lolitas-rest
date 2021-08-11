const { authValidation } = require("../Controllers/auth.controller");

module.exports.auth = async(req, res) => {
    const {User: user, Password: pass} = req.body;
    const token = await authValidation(user,pass);
    if (token != null ){
        res.status(200).json({
            auth: token
        });
    }
    else{
        res.status(400).json({
            error: 'Access Denied. Please insert corrects user and password' 
        });
    }
}