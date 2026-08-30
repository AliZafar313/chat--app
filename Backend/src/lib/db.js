import mongoose from "mongoose";


export const ConnectDB = async() => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        const conn = await mongoose.connect("mongodb+srv://alizafarhassani00_db_user:8Nv2K14xflquC3XG@cluster0.j7vkfml.mongodb.net/chat-app?appName=Cluster0")
        console.log("connected succesfully");
        console.log(conn.connection.host);


    } catch (error) {
        console.error("can't connect" + error)

    }
}