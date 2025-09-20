import User from "../models/user.model.js"
import genToken from "../config/token.js"
import bcrypt from "bcryptjs"

export const signUp = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        const existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({message:"email already exists!"})
        }

        if(password.length < 6){
            return res.status(400).json({message:"password must be atleast 6 char !"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        // ✅ fix variable naming
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // ✅ use correct token function
        const token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"strict",
            secure:false
        })

        // ✅ return user correctly
        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({message:`signup error ${error}`})
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"email doesn't exists!"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"incorrect password"})
        }

        // ✅ use correct token function & correct variable
        const token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"strict",
            secure:false
        })

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}

export const logout = async (req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"log out succesfully"})
    } catch (error) {
        return res.status(500).json({message:`logout error ${error}`})
    }
}
