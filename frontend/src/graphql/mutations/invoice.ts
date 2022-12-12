import { gql } from "@apollo/client";

export const CREATE_BILLING = gql`
  mutation ($form: FormCreateOrder!) {
    createOrder(form: $form)
  }
`;
