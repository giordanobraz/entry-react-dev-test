import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1250px;
  height: 100%;
  padding: 4rem 2rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: capitalize;
`;

export const ProductBrand = styled.h2`
  font-size: 1.87rem;
  font-weight: 600;
`;

export const ProductTitle = styled.p`
  font-size: 1.87rem;
  font-weight: 400;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3.75rem 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.25rem 0;
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
`;

export const ItemAttributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ButtonQuantity = styled.button`
  width: 45px;
  height: 45px;
  background: transparent;
  border: 1px solid var(--c-black);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.div`
  max-width: 150px;
`;

export const AttributesCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const AttributeOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
