import { gql } from "@apollo/client"

export const CREATE_PROFILE = gql`
  mutation createUser(
    $name: String
    $email: String
    $phone: Int
    $address: String
    $type: String
  ) {
    createUser(
      name: $name
      email: $email
      phone: $phone
      type: $type
      address: $address
    ) {
      _id
      name
      email
      phone
      address
      type
    }
  }
`
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
    }
  }
`
