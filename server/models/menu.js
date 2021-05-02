import mongoose from "mongoose"

const Schema = mongoose.Schema

const menuSchema = new Schema({
  name: String,
  price: Number,
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Catergory",
    },
  ],
})
const Menu = mongoose.model("Menu", menuSchema)

export default Menu
