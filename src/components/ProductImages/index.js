import React from "react";
import { withParams } from "../../utils";
import { Container, Image, List, ListItem, SelectedImage } from "./styles";

class ProductImages extends React.Component {
  render() {
    const { images, imageSelected, changeSelectedImage } = this.props;
    return (
      <Container>
        <List>
          {images &&
            images.map((image, index) => (
              <ListItem key={index} onClick={changeSelectedImage}>
                <Image src={image} alt={image} />
              </ListItem>
            ))}
        </List>
        {images && !imageSelected ? (
          <SelectedImage src={images[0]} alt={images[0]} />
        ) : (
          <SelectedImage src={imageSelected} alt={imageSelected} />
        )}
      </Container>
    );
  }
}

export default withParams(ProductImages);
