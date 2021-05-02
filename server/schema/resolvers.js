import Menu from "../models/menu.js"

const resolvers = {
  Query: {
    Menus: () => Menu.find(),
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
  },
}
export default resolvers
