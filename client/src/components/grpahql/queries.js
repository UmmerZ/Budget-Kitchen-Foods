import { gql } from "@apollo/client"

export const GET_ALL_MENUS = gql`
  query {
    Menus {
      _id
      name
    }
  }
`
