const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    classid:{
        type:String,
        required:true,
        unique:true,
    },
    studentid:{
      type:String,
      required:true,
      unique:true,
  }
});

module.exports = mongoose.model('User', userSchema);
