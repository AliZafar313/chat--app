import express from "express";
import dotenv from "dotenv"
import route from "./../routes/route.auth.js"
import router from "./../routes/message.js"
const server = express();

dotenv.config({ path: "./../../ENV.env" })

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})


server.use("/api/auth", route)
server.use("/api/auth", router)