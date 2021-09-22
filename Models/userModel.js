import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  password: {
    type: String,
  },
  customTime:{
   type: Date,
   default:Date.now()
  }
},
{
    timestamps:true
}
);

const Users = mongoose.model('users',userSchema);

export default Users;