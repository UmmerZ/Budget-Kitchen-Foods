import pkg from "apollo-server-express"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import resolvers from "./schema/resolvers.js"
import typeDefs from "./schema/typeDefs.js"
import dotenv from "dotenv"

const { ApolloServer } = pkg

const startServer = async () => {
  const app = express()
  app.use(cors())
  dotenv.config()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  server.applyMiddleware({ app })
  const address = process.env.DB_LINK

  const CONNECTION_URL = address
  const PORT = 8001

  await mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  app.listen(PORT, () => console.log(`server running on port ${PORT}`))

  mongoose.set("useFindAndModify", false)
}
startServer()
