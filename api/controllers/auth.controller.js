import User from '../modals/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) =>{
    
    const {username, email, password} = req.body;
    const hashPassword =  bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password : hashPassword});

    try{
        await newUser.save();
        res.status(201).json("User creater successfully.");
    }catch(err){
        res.status(500).json({
            message : "User not created.",
            error : err.message,
        })
    }

};