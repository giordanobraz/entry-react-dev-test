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

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  gap: 5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: capitalize;
`;
