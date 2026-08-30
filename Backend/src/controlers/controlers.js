import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import generateToken from "../utils/geneToken.js"

export default async function signup(req, res) {

    const { fullName, password, email } = req.body;

    try {



        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "all fields are required" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Passowrd must be at least 6 characters" })
        }

        //checks email regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        if (!emailRegex.test(email)) {

            return res.status(400).json({ message: "Invalid email format " })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "email already exist try another one " })
        }

        //hashing password

        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password, salt);


        //creating new user

        const newUser = new User({
            fullName,
            email,
            password: hassedPassword
        })
        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save() //save the new user to database
            res.status(201).json({
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ message: "invalid user data" })
        }

    } catch (error) {
        console.error("error in signup " + error)
        res.status(500).json({ message: "internal server error " + error })
    }
}
//checks user repaatation

//^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$