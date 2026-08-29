import express from "express";
import dotenv from "dotenv"
import authRoute from "./../routes/route.auth.js"
import messagRoute from "./../routes/message.js"
import path from "path"
import { log } from "console";
const server = express();

const __dirname = path.resolve()

dotenv.config({ path: "./../ENV.env" })
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);


server.use("/api/auth", authRoute)
server.use("/api/auth", messagRoute)
console.log("thisis the test");
console.log(path.join(__dirname, "../Frontend/dist/index.html"));
console.log("tis is after test");




// make ready for deployment
if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(__dirname, "../Frontend/dist")));
    server.get('*path', (req, res) => { // FIXED: bare '*' → '*path' for newer path-to-regexp
        res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"))
    })
}

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})