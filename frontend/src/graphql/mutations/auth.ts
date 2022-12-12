import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(form: { email: $email, password: $password }) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation ($form: FormCreateUserInput!) {
    createUser(form: $form) {
      token
    }
  }
`;
