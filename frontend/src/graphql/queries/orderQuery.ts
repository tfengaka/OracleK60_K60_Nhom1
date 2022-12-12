import { gql } from "@apollo/client";

export const GET_ORDER_LIST = gql`
  query OrderList {
    getListOrders {
      data {
        id
        quantity
        totalMoney
        createdAt
        createdBy
        deliveryStatus
        deliveryAddress
        orderDetails {
          quantity
          product {
            id
            name
            price
          }
        }
      }
    }
  }
`;
