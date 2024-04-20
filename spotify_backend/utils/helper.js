const jwt=require("jsonwebtoken");
exports = {}
exports.getToken = async()=>
{
const token = jwt.sign({identifier : user_id}, "RJHBVENIMO");
return token;
}
module.exports=exports;