import { useMutation, useQuery } from "@apollo/client"
import React, { useState } from "react"
import Navbar from "./Navbar"
import Loading from "../components/Loading"
import { GET_ALL_MENUS } from "../components/grpahql/queries"
import { Button, InputLabel, TextField } from "@material-ui/core"
import { UPLOAD_FILE } from "./grpahql/mutations"

export default function Dashboard() {
  const [file, setfile] = useState("")
  const { data, loading, error } = useQuery(GET_ALL_MENUS)
  const [UploadPhoto] = useMutation(UPLOAD_FILE)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <div>Oops! Somthing Happened</div>
  }

  function handleSubmit(e) {
    e.preventDefault()
    UploadPhoto({
      variables: {
        file: file,
      },
    })
  }
  console.log(file)
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <TextField
          name="upload-photo"
          type="file"
          onChange={e => setfile(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      {data?.Menus.map(menus => (
        <div key={menus._id}>{menus.name}</div>
      ))}
    </div>
  )
}
