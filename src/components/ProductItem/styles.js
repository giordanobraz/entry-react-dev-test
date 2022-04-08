import styled from "styled-components";

export const Button = styled.button`
  display: none;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer; 
  top: 278px;  
  right: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 24px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 16px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${Button} {
      display: block;
    }
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: contain;
  filter: ${({ inStock }) => (inStock ? "none" : "opacity(0.5)")};
`;

export const OutOfStock = styled.div`
  position: absolute;
  text-transform: uppercase;
  color: var(--c-dark-grey);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProductDetails = styled.div`
  color: ${({ inStock }) => !inStock && "var(--c-grey)"};
`;

export const ProductTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 28.8px;
`;

export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 28.8px;
`;