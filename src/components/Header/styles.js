import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1250px;
  height: 5rem;
  background-color: #fff;
  z-index: 999;
  margin: 0 auto;
  width: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--c-primary);
    font-weight: bold;
    border-bottom: 2px solid var(--c-primary);
  }
`;

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 12px 16px;
  right: 0;
`;

export const NavButtons = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContentItem = styled.div`
  color: #808080;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    color: var(--c-primary);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  margin-left: 0.8rem;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: var(--c-black);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
`;
