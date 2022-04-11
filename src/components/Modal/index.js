import React from "react";
import { connect } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart
} from "../../features/cart/cartSlice";
import { withParams } from "../../utils";
import {
  AttributeMapping,
  AttributeName,
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
  Options,
  Quantity,
  Span,
  Text,
  Total
} from "./styles";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      prices: [],
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      event.target === this.container.current ||
      event.target.id === "view-bag" ||
      event.target.id === "nav" ||
      event.target.id === "root"
    ) {
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

  handleViewBagButton = () => {
    this.props.navigate("/cart");
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
    return (
      <Container ref={this.container}>
        <CartModal>
          <Header>
            <Text bold>My Bag, </Text>
            <Text>
              {" "}
              {this.props.cart.length}
              {this.props.cart.length === 1 ? " item" : " items"}
            </Text>
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
                        `${price.currency.symbol} ${price.amount}`
                    )}
                  </Text>
                  <Attributes>                    
                      {item.product.attributes.map((attribute) => (
                        <AttributeMapping key={attribute.id}>
                          <AttributeName>{attribute.name}:</AttributeName>
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
                        </AttributeMapping>
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
            <Button id={"view-bag"} onClick={this.handleViewBagButton}>
              View Bag
            </Button>
            <Button checkout>Check Out</Button>
          </Buttons>
        </CartModal>
      </Container>
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
