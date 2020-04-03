const mongoose = require('mongoose');
// const Schema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         min: 6,
//         max: 255
//     },
//     email:{
//         type: String,
//         required: true,
//         max: 255,
//         min: 6
//     },
//     password:{
//         type: String,
//         required: true,
//         min: 6,
//         max: 1024
//     },
//     phone : 
//     {
//        type:Number,
//        required:true,
       
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });
 const collegeSchema = new mongoose.Schema({
 
     name :
     { type:String,
       required:true,
       min:6,
       max:255,
      },
     email : 
     { type:String,
       required:true,
       min:6,
       max:255,
      
     },
     password : 
     { type:String,
       required:true,
       min:6,
       max:255,
      
      },
     phone :
     { type:String,
       required:true,
       min:10,
      },
     code : 
     { type:Number,
       required:true,
       min:6,
      
      },
     address :
     { type:String,
       required:true,
       min:13,
       max:255,
      
      }
  
  });
 
//   module.exports = mongoose.model('User', userSchema);
 
  module.exports = mongoose.model('College', collegeSchema);

