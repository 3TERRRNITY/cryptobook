import React, { useRef } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Label, SubmitButton } from "../styles/Show";

type Props = {};

const Add = (props: Props) => {
  const InputForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  `;
  const InputGroup = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    row-gap: 10px;
    border: 1px solid #151515;
    border-radius: 15px;
  `;
  const InputArea = React.memo(styled.input`
    width: 200px;
    align-self: center;
    border-radius: 15px;
    padding: 10px;

    background-color: #b0b0b0;
    color: white;
  `);
  const telegramRef = useRef<HTMLInputElement>();
  const discordRef = useRef<HTMLInputElement>();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTelegram = telegramRef.current?.value;
    const newDiscord = discordRef.current?.value;
    console.log(newTelegram, newDiscord);
  };

  return (
    <Layout>
      <InputForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Telegram</Label>
          <InputArea
            placeholder="Put down you telegram username"
            ref={telegramRef}
          />
        </InputGroup>
        <InputGroup>
          <Label>Discord</Label>
          <InputArea
            placeholder="Put down you discord username"
            ref={discordRef}
          />
        </InputGroup>
        <SubmitButton type="submit">Save contact</SubmitButton>
      </InputForm>
    </Layout>
  );
};

export default Add;
