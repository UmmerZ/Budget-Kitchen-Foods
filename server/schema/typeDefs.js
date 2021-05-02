import pkg from "apollo-server-express"

const { gql } = pkg

const typeDefs = gql`
  enum Media {
    Image
  }
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
    img: [Media]
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
  type Query {
    Menus: [Menu]
    Orders: [Order]
    Buyers: [Buyer]
    Dealers: [Dealer]
    Categories: [Category]
    Users: [User]
  }
  type Mutation {
    createMenu(name: String, price: Float): Menu
    createOrder: Order
    createUser: User
    createCategory: Category
  }
`
export default typeDefs
