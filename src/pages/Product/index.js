import React from "react";
import ProductAttributes from "../../components/ProductAttributes";
import ProductImages from "../../components/ProductImages";
import { Client, GET_PRODUCT_BY_ID } from "../../services";
import { withParams } from "../../utils";
import { Container } from "./styles";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      imageSelected: null,
    };
  }

  async componentDidMount() {
    const { productId } = this.props.params;

    await Client.query({
      query: GET_PRODUCT_BY_ID(productId),
    }).then((response) => {
      this.setState({
        product: response.data.product,
      });
    });
  }

  handleImageSelect = (event) => {
    const { src } = event.target;
    return this.setState({ imageSelected: src });
  };

  render() {
    return (
      <Container>
        <ProductImages
          images={this.state.product.gallery}
          imageSelected={this.state.imageSelected}
          changeSelectedImage={this.handleImageSelect}
        />
        <ProductAttributes product={this.state.product} />
      </Container>
    );
  }
}

export default withParams(ProductPage);
