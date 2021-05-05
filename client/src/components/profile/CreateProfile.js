import { useMutation } from "@apollo/client"
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { CREATE_PROFILE } from "../grpahql/mutations"
import { Link } from "react-router-dom"
import { Alert } from "@material-ui/lab"

export default function CreateProfile() {
  const { currentUser } = useAuth()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [type, setType] = useState("")
  const [message, setMessage] = useState("")

  const useStyles = makeStyles(() => ({
    root: {
      paddingTop: "2em",
      alignContent: "center",
      alignItems: "center",
    },
    container: {
      width: "50%",
      height: "100%",
      margin: "0 auto",
      boxShadow: " 5px 5px 5px 5px  grey  ",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      paddingBottom: "2em",
      paddingTop: "2em",
    },
    fields: {
      width: "80%",
      height: "100%",
      margin: "0 auto",
    },
    typography: {
      fontSize: 50,
      fontWeight: 700,
      margin: "0 auto",
      textAlign: "center",
    },
    link: {
      textDecoration: "none",
      color: "#ffffff",
      marginLeft: "1em",
    },
  }))
  const classes = useStyles()
  const [CreateProfileMutation] = useMutation(CREATE_PROFILE)
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await CreateProfileMutation({
        variables: {
          name: name,
          email: currentUser.email,
          phone: phone,
          address: address,
          type: type,
        },
      })
      setMessage(<Alert>User {name} was updated Successfully</Alert>)
    } catch (err) {
      setMessage(
        <Alert severity="error">Error while creating User {name}</Alert>
      )
      console.log(err)
    }
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.typography}>Create Profile</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          {message ? message : null}
          <div className={classes.fields}>
            <TextField
              label="Name"
              variant="outlined"
              margin="dense"
              onChange={e => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="dense"
              value={currentUser.email}
              disabled
              fullWidth
            />
            <TextField
              label="Phone"
              variant="outlined"
              margin="dense"
              onChange={e => setPhone(e.target.value)}
              fullWidth
            />
            <TextField
              label="Address"
              variant="outlined"
              margin="dense"
              onChange={e => setAddress(e.target.value)}
              fullWidth
            />
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                variant="outlined"
                onChange={e => setType(e.target.value)}
              >
                <option value="" disabled>
                  Choose a type...
                </option>
                <option value="seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </Select>
            </FormControl>

            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button
              className={classes.link}
              variant="contained"
              color="primary"
            >
              <Link className={classes.link} to="/">
                Cancel
              </Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
