import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #151515;
  border-radius: 15px;
  padding: 40px;
  row-gap: 20px;
  @media (max-width: 520px) {
    width: 70%;
    min-width: 200px;
  }
`;
export const SubmitButton = styled.button`
  padding: 20px;
  font-size: large;
  border: none;
  border-radius: 15px;
  width: 200px;
  :hover {
    background: #151515;
    color: #fff;
    transition: ease-in-out 0.2s;
  }
  :disabled {
    background: #a1a1a1;
  }
`;

export const Label = styled.label`
  font-size: x-large;
  align-self: center;
`;
export const Input = styled.input`
  padding: 20px;
  font-size: large;
  border-radius: 15px;
  border: 1px solid #2a2a2a;
  background-color: #979797;
  color: #efeded;
  ::placeholder {
    color: #bbbaba;
  }
  &:active {
    border: 1px solid #151515;
  }
`;
export const Error = styled.div`
  font-size: large;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #151515;
  border-radius: 15px;

  background-color: #ea5353;

  transition: all 0.2s;
`;
