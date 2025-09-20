import jwt from "jsonwebtoken"
const isAuth = async(req,res,next)=>{
    try {

        const token = req.cookie.token
        if(!token){
            return res.status(400).json({message:"token doesn't found"})
        }

        const verifyToken= await jwt.verify(token,process.env.JWT_SECRET)
        req.userId = verifyToken.userId

        next()
        
    } catch (error) {
        console.log(error)
        
    }
}

export default isAuth