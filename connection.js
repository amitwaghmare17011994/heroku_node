import Mongoose  from "mongoose";

import { CONNECTION_URL } from "Constants";
Mongoose.connect(CONNECTION_URL);

const userSchema = new Mongoose.Schema(
  {
    request: String,
    time: Number,
    fullName:String,
    startDate:String,
    batch:String,
    year:String,
    stream:String,
    college:String
  },
  {
    collection: "user",
  }
);
export const User = Mongoose.model("user", userSchema);

export default Mongoose.connection;
