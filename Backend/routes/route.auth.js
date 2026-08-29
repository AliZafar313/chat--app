import express from "express";


const authRoute = express.Router();


authRoute.get("/login", (req, res) => {
    res.send("signup endpoint")

})

authRoute.get("/logout", (req, res) => {
    res.send("logout endpoint")

})


export default authRoute;