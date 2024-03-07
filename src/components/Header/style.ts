import styled from "styled-components";

import CoverHeader from "../../assets/cover-header.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${CoverHeader});

  img {
    margin-bottom: 3rem;
  }
`;
