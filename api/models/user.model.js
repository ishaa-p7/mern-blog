import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fprofile-icon-gender-neutral.html&psig=AOvVaw2GuDqsAhEU4MDRSU6_vSJY&ust=1719216005721000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjBveyg8YYDFQAAAAAdAAAAABAE',
    }
},{timestamps:true}
)

const User=mongoose.model('User',userSchema);

export default User;