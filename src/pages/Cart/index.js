import React from "react";
import { connect } from "react-redux";
import {
  Label,
  Span,
  SpanSwatch
} from "../../components/ProductAttributes/styles";
import {
  decrement,
  increment,
  removeFromCart
} from "../../features/cart/cartSlice";
import {
  AttributesCart,
  ButtonQuantity,
  Container,
  Image,
  ItemAttributes,
  ItemQuantity,
  List,
  ListItem,
  Price,
  ProductBrand,
  ProductTitle,
  Quantity,
  Title
} from "./styles";

class Cart extends React.Component {
  handleDecrement = (quantity, id) => {
    if (quantity > 1) {
      this.props.decrementQuantity(id);
    } else {
      this.props.removeItem(id);
    }
  };

  render() {
    const { currency, cart } = this.props;
    return (
      <Container>
        <Title>Cart</Title>
        <List>
          {cart.items ? (
            cart.items.map((item) => (
              <ListItem key={item.product.id}>
                <ItemAttributes>
                  <div>
                    <ProductBrand>{item.product.brand}</ProductBrand>
                    <ProductTitle>{item.product.name}</ProductTitle>
                  </div>
                  <Price>
                    {item.product.prices ? (
                      item.product.prices.map(
                        (price) =>
                          price.currency.label === currency.currency &&
                          `${price.currency.symbol} ${
                            Math.round(price.amount * item.quantity * 100) / 100
                          }`
                      )
                    ) : (
                      <span>Loading</span>
                    )}
                  </Price>
                  <AttributesCart>
                    {item.product.attributes ? (
                      item.product.attributes.map((attribute) => (
                        <p key={attribute.id}>
                          {attribute.items ? (
                            attribute.items.map((attrItem) => (
                              <span key={attrItem.id}>
                                {item.selectedAttributes[attribute.name] ===
                                  attrItem.value && (
                                  <Label>
                                    {attrItem.type === "swatch" ? (
                                      <SpanSwatch color={attrItem.value}>
                                        {attrItem.displayValue}
                                      </SpanSwatch>
                                    ) : (
                                      <Span>{attrItem.displayValue}</Span>
                                    )}
                                  </Label>
                                )}
                              </span>
                            ))
                          ) : (
                            <span>deu ruim</span>
                          )}
                        </p>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </AttributesCart>
                </ItemAttributes>
                <ItemQuantity>
                  <Quantity>
                    <ButtonQuantity
                      onClick={() =>
                        this.props.incrementQuantity(item.product.id)
                      }
                    >
                      +
                    </ButtonQuantity>
                    <span>{item.quantity}</span>
                    <ButtonQuantity
                      onClick={() =>
                        this.handleDecrement(item.quantity, item.product.id)
                      }
                    >
                      -
                    </ButtonQuantity>
                  </Quantity>
                  <Image>
                    <img
                      src={item.product.gallery[0]}
                      alt="product"
                      width="100%"
                    />
                  </Image>
                </ItemQuantity>
              </ListItem>
            ))
          ) : (
            <span>loading</span>
          )}
        </List>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementQuantity: (item) => dispatch(increment(item)),
    decrementQuantity: (item) => dispatch(decrement(item)),
    removeItem: (item) => dispatch(removeFromCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
