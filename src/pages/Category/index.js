import React from "react";
import ProductItem from "../../components/ProductItem";
import { Client, GET_CATEGORY_ALL } from "../../services";
import { withParams } from "../../utils";
import { Container, Products, Title } from "./styles.js";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    await Client.query({
      query: GET_CATEGORY_ALL,
    }).then((response) => {
      this.setState({
        products: response.data.category.products,
      });
    });
  }

  render() {
    const { category } = this.props.params;

    return (
      <Container>
        <Title>{category}</Title>
        <Products>
          {this.state.products.map((product) =>
            product.category === category ? (
              <ProductItem key={product.id} product={product} />
            ) : (
              category === "all" && (
                <ProductItem key={product.id} product={product} />
              )
            )
          )}
        </Products>
      </Container>
    );
  }
}

export default withParams(Category);
