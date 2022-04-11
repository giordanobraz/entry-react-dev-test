import React from "react";
import { connect } from "react-redux";
import shopCart from "../../assets/shop-cart.svg";
import { addToCart } from "../../features/cart/cartSlice";
import { changeCurrency } from "../../features/currency/currencySlice";
import { withParams } from "../../utils";
import {
  Button,
  Card,
  OutOfStock,
  Product,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductTitle
} from "./styles";

class ProductItem extends React.Component {
  handleAddToCart = (product) => {
    const { onSendToCart } = this.props;
    let selectedAttributes = [];

    if (product.attributes.length > 0) {
      product.attributes.map((attribute) => {
        selectedAttributes.push({
          id: attribute.id,
          value: attribute.items[0].value,
        });
      });

      const item = { product, selectedAttributes, quantity: 1 };
      onSendToCart(item);
    } else {
      const item = { product, selectedAttributes, quantity: 1 };
      onSendToCart(item);
    }
  };

  handleOpenProductPage = (productId) => {
    const { navigate } = this.props;
    navigate(`/product/${productId}`);
  };

  render() {
    const { product, currency } = this.props;

    return (
      <Card>
        <Product onClick={() => this.handleOpenProductPage(product.id)}>
          <ProductImage imageURL={product.gallery[0]} inStock={product.inStock}>
            {!product.inStock && <OutOfStock>Out of stock</OutOfStock>}
          </ProductImage>

          <ProductDetails inStock={product.inStock}>
            <ProductTitle>
              {product.brand} {product.name}
            </ProductTitle>
            <ProductPrice>
              {product.prices.map(
                (price) =>
                  price.currency.label === currency.currency &&
                  `${price.currency.symbol} ${price.amount}`
              )}
            </ProductPrice>
          </ProductDetails>
        </Product>
        {product.inStock && (
          <Button onClick={() => this.handleAddToCart(product)}>
            <img src={shopCart} alt="shop cart" />
          </Button>
        )}
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
    onSendToCart: (item) => dispatch(addToCart(item)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withParams(ProductItem));
