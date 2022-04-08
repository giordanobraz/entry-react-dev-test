import React from "react";
import { connect } from "react-redux";
import { ReactComponent as LogoIcon } from "../../assets/a-logo.svg";
import { ReactComponent as CartIcon } from "../../assets/empty-cart.svg";
import { changeCurrency } from "../../features/currency/currencySlice";
import { Client, GET_CURRENCIES } from "../../services";
import Modal from "../Modal";
import {
  Button,
  CartBadge,
  DropdownContent,
  DropdownContentItem,
  Nav,
  NavButtons,
  NavLink,
  NavMenu
} from "./styles";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      availableCurrencies: [],
      isCurrencyDropdownOpen: false,
      isModalOpen: false,
    };
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);

    // Get available currencies
    await Client.query({
      query: GET_CURRENCIES,
    }).then((response) => {
      this.setState({
        availableCurrencies: response.data.currencies,
      });
    });
  }

  handleChangeCurrency = (currency) => {
    const { label, symbol } = currency;
    this.props.onChangeCurrency({
      currency: label,
      symbol,
    });
    this.handleDropdownMenu();
  };

  handleDropdownMenu = () => {
    this.setState({
      isCurrencyDropdownOpen: !this.state.isCurrencyDropdownOpen,
    });
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.containerRef.current &&
      !this.containerRef.current.contains(event.target)
    ) {
      this.setState({
        isCurrencyDropdownOpen: false,
      });
    }
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <Nav>
        <NavMenu>
          <NavLink to="/all">ALL</NavLink>
          <NavLink to="/clothes">CLOTHES</NavLink>
          <NavLink to="/tech">TECH</NavLink>
        </NavMenu>

        <LogoIcon />

        <NavButtons ref={this.containerRef}>
          <Button onClick={this.handleDropdownMenu}>
            {this.props.currency.symbol}
          </Button>
          {this.state.isCurrencyDropdownOpen && (
            <DropdownContent>
              {this.state.availableCurrencies.map((currency) => (
                <DropdownContentItem
                  key={currency.label}
                  id={currency.label}
                  onClick={() => this.handleChangeCurrency(currency)}
                >
                  {currency.symbol} {currency.label}
                </DropdownContentItem>
              ))}
            </DropdownContent>
          )}
          <Button onClick={this.handleOpenModal}>
            <CartIcon height={20} title={"Cart"} />
            {this.props.cart.length > 0 && (
              <CartBadge>{this.props.cart.length}</CartBadge>
            )}
            {this.state.isModalOpen ? (
              <Modal handleCloseModal={this.handleCloseModal} />
            ) : null}
          </Button>
        </NavButtons>
      </Nav>
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
    onChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
