//create profile
import Users from "../Models/userModel";
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = new Users(req.body);
    let result = await user.save();
    return res.json(result).status(200);
  } catch (err) {
    console.log(err);
    return res.json(err).status(500);
  }
};

export const listAllUsers = async (req, res) => {
  try {
    let result = await Users.find();
    return res.json(result).status(200);
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let result = await Users.findById(id);
    return res.json(result).status(200);
  } catch (err) {
    console.log(err);
  }
};

export const updateUserById = async (req, res)=>{
    try{
        const {id} = req.params;
        console.log(req.body)
        let result = await Users.findByIdAndUpdate({_id:id}, {$set:req.body}, {new:true})
        return res.json(result).status(200);
    }catch(err){
        console.log(err)
    }
}

export const deleteUserById = async (req, res)=>{
    try{
        const {id} = req.params;
        const result =await Users.findByIdAndDelete(id)
        return res.json(result).status(200);
      
    }catch(err){
        console.log(err)
    }
}