import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart
} from "../../features/cart/cartSlice";
import { withParams } from "../../utils";
import {
  Attributes,
  Button,
  ButtonQuantity,
  Buttons,
  CartModal,
  Container,
  Content,
  Details,
  Header,
  Image,
  Item,
  ItemQuantity,
  Label,
  Quantity,
  Span,
  Text,
  Total
} from "./styles";

const modal = document.querySelector("#modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.handleCloseModal();
    }
  };

  handleDecrement = (quantity, id) => {
    if (quantity > 1) {
      this.props.decrementQuantity(id);
    } else {
      this.props.removeItem(id);
    }
  };

  getTotalValue = () => {
    const { cart } = this.props;
    let total = 0;
    cart.forEach((item) => {
      item.product.prices.forEach((price) => {
        if (price.currency.label === this.props.currency.currency) {
          total += price.amount * item.quantity;
        }
      });
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  render() {
    return ReactDOM.createPortal(
      <Container ref={this.container}>
        <CartModal>
          <Header>
            <Text bold>My Bag</Text>, {this.props.cart.length}{" "}
            {this.props.cart.length === 1 ? "item" : "items"}
          </Header>
          <Content>
            {this.props.cart.map((item, index) => (
              <Item key={index}>
                <Details>
                  <Text>{item.product.brand}</Text>
                  <Text>{item.product.name}</Text>
                  <Text bold>
                    {item.product.prices.map(
                      (price) =>
                        price.currency.label === this.props.currency.currency &&
                        `${price.currency.symbol} ${
                          Math.round(price.amount * item.quantity * 100) / 100
                        }`
                    )}
                  </Text>
                  <Attributes>
                    {item.product.attributes.map((attribute) => (
                      <div key={attribute.id}>
                        {attribute.items.map(
                          (attrItem, index) =>
                            item.selectedAttributes[attribute.name] ===
                              attrItem.value && (
                              <Label key={index}>
                                <Span>{attrItem.displayValue}</Span>
                              </Label>
                            )
                        )}
                      </div>
                    ))}
                  </Attributes>
                </Details>
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
              </Item>
            ))}
          </Content>
          <Total>
            <Text bold>Total</Text>
            <Text bold>
              {this.props.currency.symbol} {this.getTotalValue()}
            </Text>
          </Total>
          <Buttons>
            <Button onClick={() => this.props.navigate("/cart")}>
              View Bag
            </Button>
            <Button checkout>Check Out</Button>
          </Buttons>
        </CartModal>
      </Container>,
      modal
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency,
    cart: state.cart.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementQuantity: (item) => dispatch(increment(item)),
    decrementQuantity: (item) => dispatch(decrement(item)),
    removeItem: (item) => dispatch(removeFromCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Modal));
