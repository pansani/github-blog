import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostsContainer = styled.div`
  padding-top: 2rem;

  width: 61%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 0 auto;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;
