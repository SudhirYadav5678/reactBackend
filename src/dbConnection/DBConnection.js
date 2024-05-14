import mongoose from "mongoose";

export default async function dbConnectionConfig(){
    try {
        const connection= await mongoose.connect(`${process.env.MONGOOSE_URI}/${process.env.DATABASE_NAME}`)
        console.log(`MongoDB is connect at ${process.env.MONGOOSE_URI}`);



    } catch (error) {
        console.log("dbConnectionConfig error ", error);
        process.exit(1)
    }
}