import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  userId: String,
  movie1: String,
  movie2: String,
});

const History = mongoose.model("histories", HistorySchema);
export default History;