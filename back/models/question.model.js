import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category:{type: String, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],//좋아요를 누른 사람들 아이디가 배열 형태로 들어옴
    createdAt:{type: Date, default: Date.now }
})

const Question = mongoose.model("Question", questionSchema);
export default Question;