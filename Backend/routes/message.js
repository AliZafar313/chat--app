import express from "express";


const messagRoute = express.Router();

messagRoute.get("/send", (req, res) => {
    res.send("message endpoint")
});


export default messagRoute;