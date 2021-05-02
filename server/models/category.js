import mongoose from "mongoose"

const Schema = mongoose.Schema

const catergorySchema = new Schema({
  name: String,
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
})
const Category = mongoose.model("Category", catergorySchema)

export default Category
