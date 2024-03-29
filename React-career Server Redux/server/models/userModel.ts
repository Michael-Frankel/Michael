import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  lang: String,
  email: String,
  password: String,
});

const User = mongoose.model("register", UserSchema);
export default User;