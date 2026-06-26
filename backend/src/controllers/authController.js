import UserModel from "../models/User";
import crypto from "crypto";
import jwt from "jsonwebtoken";


export async function register(req,res) {
    const {name,email, password} = req.body;
    const isAlreadtRegistered = await User.findOne({
        $or:[
            {email}
        ]
    })

    if(isAlreadtRegistered){
        res.status(409).json({
            massage: "this email already registered"
        })
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");


    const user = await user.create({
        name,
        email,
        password
    })
}
