import mongoose from "mongoose"

const Schema = mongoose.Schema

const fileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String,
})

const File = mongoose.model("File", fileSchema)

export default File
