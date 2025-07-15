import User from "../models/userModels.js"

export const create = async(req,res) => {
    try{
        const newUser = new User(req.body);

    const {email} = newUser;
    const existingUser =await User.findOne({email})
    console.log(existingUser)
    if(existingUser){
        return res.status(400).json({message:"User already exists!"})
    }
    const saveData = await newUser.save();
    res.status(200).json({message: "User created successfully."});
    }catch(err){
        res.status(500).json({errorMessage: err.message})
    }
}

export const getAllUsers = async (req,res) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0) {
            return res.status(404).json({message:"Users data not found."})
        }
        return res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({errorMessage: err.message})
    }
}
export const getUser  = async(req,res) => {
    try {
        const id = req.params.id;
    const user = await User.findById(id)
    if(!user) {
        return res.status(404).json({message:"User not found."})
    }
    res.status(200).json({user});
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const updateUser =async (req,res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const userData = await User.findByIdAndUpdate(id,updates,{new: true});
        if(!userData) {
            return res.status(404).josn({message: "User not found."})
        }
        res.status(200).json({message:"User updated successfully"})
    } catch (error) {
        res.status(500).json({errorMessage: error.message})

    }
}
export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
    const user = await User.findById(id)
    if(!user) {
        return res.status(404).json({message:"User not found."})
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({message:"User deleted successfully."})
    } catch (error) {
        res.status(500).json({errorMessage: error.message})

    }
}