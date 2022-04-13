import React from "react";
import ProductAttributes from "../../components/ProductAttributes";
import ProductImages from "../../components/ProductImages";
import { withParams } from "../../utils";
import { Container } from "./styles";

class ProductPage extends React.Component {
  state = {
    imageSelected: "",
  };

  handleImageSelect = (event) => {
    const { src } = event.target;
    this.setState({ imageSelected: src });
  };

  render() {
    const { location } = this.props;

    return (
      <Container>
        <ProductImages
          images={location.state.product.gallery}
          imageSelected={this.state.imageSelected}
          changeSelectedImage={this.handleImageSelect}
        />
        <ProductAttributes product={location.state.product} />
      </Container>
    );
  }
}

export default withParams(ProductPage);
