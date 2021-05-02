import mongoose from "mongoose"

const Schema = mongoose.Schema

const dealerSchema = new Schema({
  name: String,
  address: String,
  phone: Number,
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
})
const Dealer = mongoose.model("Dealer", dealerSchema)

export default Dealer
