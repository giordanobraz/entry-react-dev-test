import React from "react";
import { ReactComponent as ChevLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as ChevRight } from "../../assets/chevron-right.svg";
import { Container, Image } from "./styles";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  previousSlide = () => {
    this.setState({
      currentSlide:
        this.state.currentSlide === 0 ? 0 : this.state.currentSlide - 1,
    });
  };

  nextSlide = () => {
    this.setState({
      currentSlide:
        this.state.currentSlide === this.props.images.length - 1
          ? 0
          : this.state.currentSlide + 1,
    });
  };

  render() {
    return (
      <Container>
        <ChevLeft
          width="24px"
          height="24px"
          onClick={this.previousSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            cursor: "pointer",
          }}
        />
        <ChevRight
          width="24px"
          height="24px"
          onClick={this.nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            cursor: "pointer",
          }}
        />
        {this.props.images.map((image, index) => {
          return (
            <div key={index}>
              {index === this.state.currentSlide && (
                <Image src={image} alt={`slide-${index}`} />
              )}
            </div>
          );
        })}
      </Container>
    );
  }
}

export default Slider;
