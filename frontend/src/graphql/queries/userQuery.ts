import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      email
      fullName
      phoneNumber
      address
      avatar
      bod
      gender
    }
  }
`;
