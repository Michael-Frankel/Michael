import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
});

const User = mongoose.model("login", UserSchema);
export default User;