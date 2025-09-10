import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String , required: true},
    email: { type: String, required: true, unique: true },
    anoymity: {type: Boolean, required: true} //익명여부
})

const User = mongoose.model("User", userSchema);
export default User;