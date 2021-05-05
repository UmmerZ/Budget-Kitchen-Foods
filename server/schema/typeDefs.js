import pkg from "apollo-server-express"

const { gql } = pkg

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    phone: Int
    address: String
    orders: [Order]
  }
  type Menu {
    _id: ID
    name: String
    price: Float
    category: [Category]
    img: [File]
  }
  type Dealer {
    _id: ID
    name: String
    phone: Int
    address: String
    menus: [Menu]
  }
  type Buyer {
    _id: ID
    name: String
    phone: Int
    address: String
    orders: [Order]
  }
  type Order {
    _id: ID
    time: Int
    dealer: [Dealer]
    user: [User]
    menus: [Menu]
    total: Float
  }
  type Category {
    _id: ID
    name: String
    menus: [Menu]
  }
  type File {
    _id: ID!
    filename: String!
    mimetype: String!
    path: String!
  }
  type Query {
    Menus: [Menu]
    Orders: [Order]
    Buyers: [Buyer]
    Dealers: [Dealer]
    Categories: [Category]
    Users: [User]
    Files: [File]
  }
  type Mutation {
    createMenu(name: String, price: Float): Menu
    createOrder: Order
    createUser(
      name: String
      email: String
      phone: Int
      address: String
      type: String
    ): User
    uploadFile(file: Upload!): File
    createCategory: Category
  }
`
export default typeDefs
