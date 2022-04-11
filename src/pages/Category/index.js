import React from "react";
import ProductItem from "../../components/ProductItem";
import { withParams } from "../../utils";
import { Client, GET_CATEGORY, GET_CATEGORY_ALL } from "./../../services/index";
import { Container, Products, Title } from "./styles.js";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    if (this.props.params.category === "all") {
      await Client.query({
        query: GET_CATEGORY_ALL,
      }).then((res) => {
        this.setState({
          products: res.data.category.products,
        });
      });
    } else {
      await Client.query({
        query: GET_CATEGORY(this.props.params.category),
      }).then((res) => {
        this.setState({
          products: res.data.category.products,
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.category !== this.props.params.category) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <Container>
        <Title>{this.props.params.category}</Title>
        <Products>
          {this.state.products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </Products>
      </Container>
    );
  }
}

export default withParams(Category);
