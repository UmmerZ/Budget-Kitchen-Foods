import React from "react"
import { ApolloProvider } from "@apollo/client"
import client from "../src/components/index"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AuthProvider from "./components/auth/AuthContext"
import PrivateRoute from "../src/components/auth/privateRoute"
import Login from "../src/components/auth/Login"
import CreateUser from "./components/auth/CreateUser"
import CreateProfile from "./components/profile/CreateProfile"

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/updateProfile"
              component={CreateProfile}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreateUser} />
          </Switch>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
