import styled from "styled-components";

export const FormContainer = styled.form`
  width: 54rem;

  margin: 0 auto;

  margin-top: 4rem;
  margin-bottom: 1rem;

  input {
    width: 100%;
    height: 2.5rem;

    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};

    padding: 1.3rem;

    color: ${(props) => props.theme["base-text"]};
  }

  label {
    color: ${(props) => props.theme["base-subtitle"]};
    display: block;
    font-size: 18px;

    margin-bottom: 1rem;
  }
`;
