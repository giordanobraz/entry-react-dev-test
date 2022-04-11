import React from "react";
import { connect } from "react-redux";
import { Label, Span } from "../../components/ProductAttributes/styles";
import Slider from "../../components/Slider";
import {
  decrement,
  increment,
  removeFromCart
} from "../../features/cart/cartSlice";
import {
  AttributeOptions,
  AttributesCart,
  ButtonQuantity,
  Container, ItemAttributes,
  ItemQuantity,
  List,
  ListItem,
  Options,
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
                    {item.product.prices &&
                      item.product.prices.map(
                        (price) =>
                          price.currency.label === currency.currency &&
                          `${price.currency.symbol} ${price.amount}`
                      )}
                  </Price>
                  <AttributesCart>
                    {item.product.attributes.map((attribute) => (
                      <AttributeOptions key={attribute.id}>
                        <span>{attribute.name}:</span>
                        <Options>
                          {attribute.items &&
                            attribute.items.map((attributeItem) => (
                              <Label key={attributeItem.id}>
                                <Span
                                  selected={
                                    item.selectedAttributes.find(
                                      (attr) => attr.id === attribute.id
                                    ) &&
                                    item.selectedAttributes.find(
                                      (attr) => attr.id === attribute.id
                                    ).value === attributeItem.value
                                  }
                                >
                                  {attributeItem.displayValue}
                                </Span>
                              </Label>
                            ))}
                        </Options>
                      </AttributeOptions>
                    ))}
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
                  <Slider images={item.product.gallery} />
                  {/* <Image>
                    <img
                      src={item.product.gallery[0]}
                      alt="product"
                      width="100%"
                    />
                  </Image> */}
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
