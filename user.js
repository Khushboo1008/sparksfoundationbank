const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username: {type:String,require:true},
    firstname: {type:String,require:true},
    lastname: {type:String,require:true},
    password: {type:String,require:true},
    confirmpassword: {type:String,require:true},
    emailid: {type:String,require:true},
    accountno: {type:Number,require:true},
    balance: {type:Number}
});
module.exports = mongoose.model("User",userSchema);
