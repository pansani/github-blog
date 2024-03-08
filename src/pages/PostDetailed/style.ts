import styled from "styled-components";

export const IssueContentContainer = styled.div`
  width: 54rem;

  color: ${(props) => props.theme.white};

  margin: 0 auto;

  p {
    font-size: 17px;

    margin: 0 auto;
    font-weight: 500;

    margin-top: 1rem;

    @media (max-width: 768px) {
      width: 350px;

      margin-left: 3%;
    }
  }
`;
