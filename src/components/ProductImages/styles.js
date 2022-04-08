import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  width: 80px;
  list-style: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const SelectedImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
`;
