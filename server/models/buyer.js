import mongoose from "mongoose"

const Schema = mongoose.Schema

const buyerSchema = new Schema({
  name: String,
  address: String,
  phone: Number,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
})
const Buyer = mongoose.model("Buyer", buyerSchema)

export default Buyer
