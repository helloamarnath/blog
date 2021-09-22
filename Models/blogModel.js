import mongoose, { isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const blogSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  user:{
      type: ObjectId,
      ref:'users'
  }
  
},
{
    timestamps:true
}
);

const Blogs = mongoose.model('blogs',blogSchema);

export default Blogs;