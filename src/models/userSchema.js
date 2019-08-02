const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
    "username": {type: String},
    "password": {type: String},
    "firstname": {type: String},
    "lastname": {type: String}, 
    
});

userSchema.methods.joiValidate = function(obj) {

var schema = {
    username: Joi.types.String().required(),
    password: Joi.types.String().min(8).required(),
    first_name: Joi.types.String().required(),
    last_name: Joi.types.String().required(),
    
}
return Joi.validate(obj, schema);
};

const user = mongoose.model("users", userSchema);
const a_var = "niyanta";

module.exports= {
   user, a_var
}

