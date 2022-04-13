import React from "react";
import { Query } from "react-apollo";
import { connect } from "react-redux";
import ProductListItem from "../../components/ProductListItem";
import { addToCart } from "../../features/cart/cartSlice";
import { GET_CATEGORY } from "../../services";
import { withParams } from "../../utils";
import { Container, ProductList, Title } from "./styles.js";

class Category extends React.Component {
  handleAddToCart = (product) => {
    const { onSendToCart } = this.props;
    let selectedAttributes = [];

    if (product.attributes.length > 0) {
      product.attributes.map((attribute) =>
        selectedAttributes.push({
          id: attribute.id,
          value: attribute.items[0].value,
        })
      );

      const item = { product, selectedAttributes, quantity: 1 };
      onSendToCart(item);
    } else {
      const item = { product, selectedAttributes, quantity: 1 };
      onSendToCart(item);
    }
  };

  render() {
    const { currency, params } = this.props;

    return (
      <Container>
        <Title>{params.category}</Title>
        <ProductList>
          <Query query={GET_CATEGORY(params.category)}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>{`Error: ${error}`}</p>;

              return data.category.products.map((product) => (
                <ProductListItem
                  key={product.id}
                  currency={currency}
                  product={product}
                  handleAddToCart={this.handleAddToCart}
                />
              ));
            }}
          </Query>
        </ProductList>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSendToCart: (product) => dispatch(addToCart(product)),
  };
}

function mapStateToProps(state) {
  return {
    currency: state.currency,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withParams(Category));
