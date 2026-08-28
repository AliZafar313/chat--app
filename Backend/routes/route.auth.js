import express from "express";


const route = express.Router();


route.get("/login", (req, res) => {
    res.send("signup endpoint");

})

route.get("/logout", (req, res) => {
    res.send("logout endpoint")

})


export default route;