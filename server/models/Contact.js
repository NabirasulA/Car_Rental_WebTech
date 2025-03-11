const mongoose=require('mongoose')

const ContactSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    phone:String,
    message:String,
    
})

const ContactModel = mongoose.model("contacts",ContactSchema)
module.exports = ContactModel;