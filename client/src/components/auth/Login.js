import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Grid, TextField } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { useAuth } from "./AuthContext"
import { useHistory } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(email, password)
      history.push("/")
    } catch {
      setError("Failed to Login")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          height: "40em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{
            height: "40%",
            width: "30%",
            background: "white",
            paddingTop: "50px",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="dense"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          {error ? <Alert severity="error">Failed to Login</Alert> : ""}
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
          <Link to="/signup">Dont Have an Account</Link>
        </Grid>
      </div>
    </form>
  )
}
