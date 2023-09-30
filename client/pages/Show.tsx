import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

type Props = {};

const Show = (props: Props) => {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #151515;
    border-radius: 15px;
    padding: 40px;
    row-gap: 20px;
  `;
  const SumbitButton = styled.button`
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
  `;

  const Label = styled.label`
    font-size: x-large;
    align-self: center;
  `;
  const Input = styled.input`
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
  const Error = styled.div`
    font-size: large;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #151515;
    border-radius: 15px;

    background-color: #ea5353;

    transition: all 0.2s;
  `;

  const addressRef = useRef<HTMLInputElement>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = (event) => {
    event.preventDefault();

    const address = addressRef.current?.value;
    if (!address) {
      setErrorMessage("Please enter an address.");
      return;
    }
    console.log("Address: ", address);
    setErrorMessage(null);
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label>Write address</Label>
        <Input ref={addressRef} placeholder="0x..." required />
        <SumbitButton type="submit">Search</SumbitButton>
        {errorMessage && <Error>{errorMessage}</Error>}
      </Form>
    </Layout>
  );
};

export default Show;
