import { connect } from "http2";
import { MongoClient } from "mongodb";

const MONGO_URL="mongodb://localhost";
const MONGO_DBNAME="bio";
const mongo={
    db:null,
    async Connect(){
        const client=new MongoClient(MONGO_URL)
        await client.connect();
        console.log("Mongo connected");
        this.db=client.db(MONGO_DBNAME)
        console.log("mongo db connected to database")
    }
}
export default mongo;