import express from "express";
import dotenv from "dotenv"
import authRoute from "./../routes/route.auth.js"
import messagRoute from "./../routes/message.js"
import path from "path"
import { log } from "console";
import { ConnectDB } from "./lib/db.js";
const server = express();

const __dirname = path.resolve()

dotenv.config({ path: "./../ENV.env" })
const PORT = process.env.PORT || 3000;
server.use(express.json());

server.use("/api/auth", authRoute)
server.use("/api/auth", messagRoute)




// make ready for deployment
if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(__dirname, "../Frontend/dist")));
    server.get('*path', (req, res) => { // FIXED: bare '*' → '*path' for newer path-to-regexp
        res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"))
    })
}

// listening on varaible port
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    //calilng connection method 
    ConnectDB();
})