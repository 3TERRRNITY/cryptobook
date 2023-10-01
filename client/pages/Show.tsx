import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { ethers } from "ethers";
import provider from "../provider";
import contactFactory from "../contactFactory";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = addressRef.current?.value;
    console.log("address: ", address);
    setErrorMessage(null);

    if (!address) {
      setErrorMessage("Please enter an address.");
      return;
    }

    try {
      const contactAddress = await contactFactory.ownerToContact(address);
      console.log("contactAddress: ", contactAddress);
      const contactAbi = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "_telegram",
              type: "string",
            },
            {
              internalType: "string",
              name: "_discord",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "description",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "discord",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
          ],
          name: "setDescription",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_discord",
              type: "string",
            },
          ],
          name: "setDiscord",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_telegram",
              type: "string",
            },
          ],
          name: "setTelegram",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "telegram",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contact = new ethers.Contract(contactAddress, contactAbi, provider);
      const telegram = await contact.telegram();
      console.log("telegram: ", telegram);
      const discord = await contact.discord();
      console.log("discord: ", discord);
      const description = await contact.description();
      console.log("description: ", description);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Label>Write address</Label>
        <Input ref={addressRef} placeholder="0x..." />
        <SumbitButton type="submit">Search</SumbitButton>
        {errorMessage && <Error>{errorMessage}</Error>}
      </Form>
    </Layout>
  );
};

export default Show;
