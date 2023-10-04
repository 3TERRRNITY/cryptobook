import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { Error, Label, SubmitButton } from "../styles/Show";
import provider from "../provider";
import contactFactory from "../contactFactory";

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
  const AddSubmitButton = styled(SubmitButton)`
    grid-column: 1/3;
    margin: 0 auto;
  `;
  const Success = styled(Error)`
    background-color: #359835;
  `;

  const telegramRef = useRef<HTMLInputElement>();
  const discordRef = useRef<HTMLInputElement>();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const newTelegram = telegramRef.current?.value;
    const newDiscord = discordRef.current?.value;

    const signer = await provider.getSigner();
    const contactFactoryWithSigner = contactFactory.connect(signer);

    try {
      let response;
      if (!newTelegram) {
        setErrorMessage(
          "You need to fill the telegram area! (discord and description are optional)"
        );
      } else if (!newDiscord) {
        response = await contactFactoryWithSigner["createContact(string)"](
          newTelegram
        );
      } else {
        response = await contactFactoryWithSigner[
          "createContact(string, string)"
        ](newTelegram, newDiscord);
      }

      console.log("response: ", response);
      setSuccessMessage(`Transaction hash: ${response.hash}`);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <InputForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Telegram</Label>``
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

        <AddSubmitButton type="submit">Save contact</AddSubmitButton>
      </InputForm>
      {errorMessage && (
        <Error style={{ wordBreak: "break-word" }}>{errorMessage}</Error>
      )}
      {successMessage && (
        <Success style={{ wordBreak: "break-word" }}>{successMessage}</Success>
      )}
    </Layout>
  );
};

export default Add;
