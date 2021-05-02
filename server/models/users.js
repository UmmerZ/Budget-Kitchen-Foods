import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  type: [
    {
      type: Schema.Types.ObjectId,
      ref: "Buyer",
      ref: "Dealer",
    },
  ],
})
const User = mongoose.model("User", userSchema)

export default User
