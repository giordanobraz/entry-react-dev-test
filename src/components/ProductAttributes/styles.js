import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Brand = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
`;

export const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 400;
`;

export const SpanSwatch = styled.span`
  display: inline-block;
  width: 63px;
  height: 45px;
  cursor: pointer;
  border: 1px solid var(--c-black);
  text-align: center;
  line-height: 44px;
  background-color: ${({ color }) => `${color}`};
  img {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

export const Span = styled.span`
  display: inline-block;  
  height: 45px;
  cursor: pointer;
  border: 1px solid var(--c-black);
  text-align: center;
  line-height: 44px;
  padding: 0 1rem;
`;

export const Label = styled.label`
  color: var(--c-black);
  font-size: 1rem;
  font-weight: 500;
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} ${SpanSwatch} {
    border: 1px solid var(--c-primary);
    img {
      opacity: 1;
    }
  }

  &:checked + ${Label} ${Span} {
    color: white;
    background-color: var(--c-black);
  }
`;

export const Attributes = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

export const Attribute = styled.div`
  margin: 1rem 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AttributeName = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const PriceData = styled.div``;

export const Price = styled.h2`
  font-weight: 700;
  font-size: 1.3rem;
`;

export const Button = styled.button`
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: white;
  background-color: var(--c-primary);
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    filter: opacity(0.5);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Description = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

export const ShowMoreBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  border: none;

  &:hover {
    color: var(--c-primary);
  }
`;
