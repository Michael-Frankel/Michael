import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: String,
  movie1: String,
  movie2: String
});

const Video = mongoose.model("history", UserSchema);
export default Video;