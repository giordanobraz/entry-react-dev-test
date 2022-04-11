import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const CartModal = styled.div`
  position: absolute;
  background: #fff;
  padding: 20px;
  width: 500px;
  right: 340px;
  max-width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
  max-height: 300px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

export const Total = styled.div`
  display: flex;
  flex direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  height: 2.6rem;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid var(--c-black);
  background: transparent;

  ${({ checkout }) => {
    if (checkout) {
      return `
          background: var(--c-primary);
          color: #FFFFFF;
          border: none;
        `;
    }
  }}
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  font-family: "Raleway", sans-serif;
`;

export const ProductName = styled(Text)`
  font-weight: 300;
`;

export const ItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 24px;
  height: 24px;
  background: transparent;
  border: 1px solid var(--c-black);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.div`
  max-width: 80px;
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const AttributeMapping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 5px 0px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

export const Span = styled.span`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: var(--c-grey);
  border: 1px solid var(--c-grey);
  background-color: #e2e2e2;
  text-align: center;
  padding: 0.3rem;
  ${({ selected }) => {
    if (selected) {
      return `
        background-color: var(--c-black);
        color: white;       
      `;
    }
  }}
`;

export const AttributeName = styled.p`
  font-size: 0.8rem;
  font-family: "Raleway", sans-serif;
`;

export const Label = styled.label`
  color: var(--c-black);
  font-size: 0.8rem;
  font-weight: 500;
`;
