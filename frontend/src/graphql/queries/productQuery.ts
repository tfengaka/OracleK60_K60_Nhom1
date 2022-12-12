import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORY = gql`
  query getProducts($categoryAliases: [String], $page: Int, $size: Int) {
    getProducts(filter: { categoryAliases: $categoryAliases, paginate: { page: $page, size: $size } }) {
      data {
        id
        name
        description
        images {
          url
        }
        price
        quantityStore
        category {
          name
          alias
        }
      }
      pagination {
        perPage
        currentPage
        totalPages
        totalElements
      }
    }
    getCategory {
      alias
      name
      description
    }
  }
`;

export const GET_SUGGESTED_PRODUCTS = gql`
  query {
    getProducts(filter: { categoryAliases: [], paginate: { page: 1, size: 5 } }) {
      data {
        id
        name
        description
        images {
          url
        }
        price
        quantityStore
        category {
          name
          alias
          description
        }
      }
    }
  }
`;
