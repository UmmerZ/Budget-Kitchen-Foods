import { useQuery } from "@apollo/client"
import React from "react"
import Navbar from "./Navbar"
import Loading from "../components/Loading"
import { GET_ALL_MENUS } from "../components/grpahql/queries"

export default function Dashboard() {
  const { data, loading, error } = useQuery(GET_ALL_MENUS)
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <div>Oops! Somthing Happened</div>
  }
  return (
    <div>
      <Navbar />
      {data?.Menus.map(menus => (
        <div key={menus._id}>{menus.name}</div>
      ))}
    </div>
  )
}
