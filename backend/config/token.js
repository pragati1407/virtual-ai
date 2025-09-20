import jwt from "jsonwebtoken"

const genToken = (userId) => {
    try {
        // jwt.sign is synchronous, no async/await required
        const token = jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: "10d" }
        )
        return token
    } catch (error) {
        console.log("JWT Error:", error)
        return null
    }
}

export default genToken
