const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
    username:{type:String, reuqired:true, unique:true},
    email:{type:String, reuqired:true, unique:true},
    password:{type:String, reuqired:true, unique:true},
    profilePic:{type:String, default: ""},
    isAdmin:{type:Boolean, default:false}
    },
    {timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);