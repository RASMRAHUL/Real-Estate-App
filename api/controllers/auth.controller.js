import User from '../modals/user.model.js';
import bcrypt from 'bcryptjs';
//import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) =>{
    
    const {username, email, password} = req.body;
    const hashPassword =  bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password : hashPassword});

    try{
        await newUser.save();
        res.status(201).json("User creater successfully.");
    }catch(err){
        next(error);
    }

};