import express from "express"
import { login, logout, signUp } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",login)
authRouter.get("/signin",logout)

export default authRouter