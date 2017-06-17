const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Equema de la db.
var userSchema = new Schema({
    name: String,
    email: { type:String , unique: true },
    password: String
});   

var User = mongoose.model('User', userSchema);
module.exports = User;