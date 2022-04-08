import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRODUCT_BY_ID = (productId) => gql`
query {
  product(id: "${productId}") {            
    id
    brand
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        id
        value
        displayValue
      }
    }
    prices {
      amount
      currency {
        label
        symbol
      }
    }
  }
}
`;

export const GET_CATEGORY_ALL = gql`
  query {
    category {
      name
      products {
        id
        name
        brand
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;
