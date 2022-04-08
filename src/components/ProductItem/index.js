import React from "react";
import { connect } from "react-redux";
import shopCart from "../../assets/shop-cart.svg";
import { addToCart } from "../../features/cart/cartSlice";
import { changeCurrency } from "../../features/currency/currencySlice";
import { withParams } from "../../utils";
import {
  Button,
  OutOfStock,
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductTitle
} from "./styles";

class ProductItem extends React.Component {
  handleAddToCart = (product) => {
    const { onSendToCart } = this.props;
    const item = { product, selectedAttributes: [], quantity: 1 };
    onSendToCart(item);
    alert("Added to cart");
  };

  render() {
    const { product, currency, navigate } = this.props;

    return (
      <ProductCard>
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
        {product.inStock && (
          <Button
            onClick={
              product.attributes.length > 0
                ? () => navigate(`/product/${product.id}`)
                : () => this.handleAddToCart(product)
            }
          >
            <img src={shopCart} alt="shop cart" />
          </Button>
        )}
      </ProductCard>
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
