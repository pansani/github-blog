import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;

  background: ${(props) => props.theme["base-profile"]};
  margin: 0 auto;
  margin-top: -6.25rem;

  border-radius: 10px;

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  gap: 4rem;

  padding-left: 60px;
  padding-right: 20px;

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
`;
