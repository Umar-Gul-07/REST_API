import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required : true , trim : true},
    age : { type : Number , required : true},
    fees : {type : mongoose.Decimal128, required : true , velidate : (value)=>
    value >5000.5},
     
      joinDate: {
        type: Date,
        default: Date.now
      }
})

const userModel = mongoose.model("user", userSchema);
export default userModel