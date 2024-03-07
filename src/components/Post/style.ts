import styled from "styled-components";

export const PostContainer = styled.div`
  width: 26rem;
  height: 15.625rem;

  background: ${(props) => props.theme["base-post"]};

  padding: 1.5rem;

  border-radius: 10px;

  h1 {
    max-width: 15rem;
    font-size: 20px;
    font-weight: 600;

    margin-bottom: 1rem;

    color: ${(props) => props.theme["base-title"]};
  }

  div {
    display: flex;
    margin-bottom: 10px;

    gap: 1rem;
  }

  span {
    color: ${(props) => props.theme["base-span"]};

    padding-top: 0.3rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};

    width: 22rem;

    font-size: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 7rem;
  }
`;
