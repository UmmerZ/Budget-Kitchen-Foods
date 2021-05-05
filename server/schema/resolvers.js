import { mkdir, createWriteStream } from "fs"
import shortid from "shortid"
import File from "../models/file.js"
import Menu from "../models/menu.js"
import User from "../models/users.js"

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = shortid.generate()
  const path = `images/${id}-${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ _id, path, filename, mimetype }))
      .on("error", reject)
  )
}

const processUpload = async upload => {
  const { createReadStream, filename, mimetype } = await upload
  const stream = createReadStream()
  const file = await storeUpload({ stream, filename, mimetype })
  return file
}

const resolvers = {
  Query: {
    Menus: () => Menu.find(),
    Files: () => File.find(),
  },
  Mutation: {
    createMenu: async (_, { name, price }) => {
      const existingMenu = await Menu.findOne({ name: name })
      if (existingMenu) {
        throw new Error("Menu already Exists")
      }

      const menuitem = new Menu({ name, price })
      await menuitem.save()
      return menuitem
    },
    createUser: async (_, { name, phone, address, type, email }) => {
      const existingUser = await User.findOne({ name: name, email: email })
      if (existingUser) {
        throw new Error("User already Exists")
      }

      const newUser = new User({ name, phone, address, type, email })
      await newUser.save()
      return newUser
    },
    uploadFile: async (_, { file }) => {
      mkdir("images", { recursive: true }, err => {
        if (err) throw err
      })

      const upload = await processUpload(file)
      await File.create(upload)
      return upload
    },
  },
}
export default resolvers
