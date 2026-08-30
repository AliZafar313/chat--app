import express from "express";
import signup from "../src/controlers/controlers.js"


const authRoute = express.Router();


authRoute.post("/login", signup)

authRoute.get("/logout", (req, res) => {
    res.send("logout endpoint")

})


export default authRoute;