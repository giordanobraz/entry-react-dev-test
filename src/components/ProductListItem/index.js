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

class ProductListItem extends React.Component {
  render() {
    const { currency, product, handleAddToCart } = this.props;

    return (
      <Card>
        <Product to={`/product/${product.id}`} state={{ product }}>
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
          <Button onClick={() => handleAddToCart(product)}>
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
)(withParams(ProductListItem));
