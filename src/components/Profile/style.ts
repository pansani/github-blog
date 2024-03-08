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

  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 100%;
  }

  img {
    width: 9.25rem;
    height: 9.25rem;

    @media (max-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
  }

  span {
    margin-left: 0.5rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  p {
    max-width: 38.25rem;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const GithubIconWrapper = styled.div`
  display: flex;

  width: 22px;
  border: 1px solid ${(props) => props.theme["base-label"]};
  border-radius: 50%;
`;

export const IconAndDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialData = styled.div`
  display: flex;

  gap: 3rem;

  color: ${(props) => props.theme["base-label"]};
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GithubLinkContainer = styled.div`
  display: flex;

  position: absolute;
  top: 15%;
  right: 5%;

  text-decoration: none;

  color: ${(props) => props.theme.blue};
`;
