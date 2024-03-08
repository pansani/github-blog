import { CaretLeft } from "@phosphor-icons/react";
import styled from "styled-components";

export const PostHeaderContainer = styled.div`
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
    height: 10rem;
    padding: 0;

    align-items: normal;
  }

  h1 {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 16px;

      width: 200px;

      margin: 0 auto;

      margin-top: 2rem;
    }
  }

  span {
    margin-left: 0.5rem;

    color: ${(props) => props.theme["base-span"]};

    @media (max-width: 768px) {
      font-size: 12px;
      display: inline;
      margin-left: 0;
    }
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

export const BackToHomeContainer = styled.div`
  display: flex;

  position: absolute;
  top: 15%;
  left: 5%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CareLeftIcon = styled(CaretLeft)`
  margin-right: 0.5rem;
`;

export const GithubIconWrapper = styled.div`
  display: flex;

  width: 22px;
  border: 1px solid ${(props) => props.theme["base-label"]};
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 22px;
  }
`;

export const IconAndDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostSocialData = styled.div`
  display: flex;

  gap: 3rem;

  color: ${(props) => props.theme["base-label"]};

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const PostDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const GithubLinkContainer = styled.div`
  display: flex;

  position: absolute;
  top: 15%;
  right: 5%;

  text-decoration: none;

  color: ${(props) => props.theme.blue};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
