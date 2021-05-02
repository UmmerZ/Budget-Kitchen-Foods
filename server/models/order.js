import mongoose from "mongoose"

const Schema = mongoose.Schema

const orderSchema = new Schema({
  time: Date,
  amount: Number,
  dealer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dealer",
    },
  ],
  buyer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Buyer",
    },
  ],
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
})
const Order = mongoose.model("Order", orderSchema)

export default Order
