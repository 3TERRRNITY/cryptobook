import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import getContactByAddress from "../utils/getContactByAddress";
import ContactInfo from "../components/ContactInfo";
import Modal from "../components/Modal";
import { Error, Form, Input, Label, SubmitButton } from "../styles/Show";

type Props = {};

const Show = (props: Props) => {
  const [telegram, setTelegram] = useState<string>();
  const [discord, setDiscord] = useState<string>();
  const [description, setDescription] = useState<string>();

  const addressRef = useRef<HTMLInputElement>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      setModalOpen(true);
    }
  }, [isModalOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = addressRef.current?.value;
    setErrorMessage(null);
    setTelegram("");
    setDiscord("");
    setDescription("");
    if (!address) {
      setErrorMessage("Please enter an address.");
      setModalOpen(false);
      return;
    }

    try {
      const contact = await getContactByAddress(address);
      setTelegram(contact.telegram);
      setDiscord(contact.discord);
      setDescription(contact.description);
      setModalOpen(true);
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
        <SubmitButton type="submit">Search</SubmitButton>
        {errorMessage && <Error>{errorMessage}</Error>}
      </Form>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ContactInfo
          telegram={telegram}
          discord={discord}
          description={description}
        />
      </Modal>
    </Layout>
  );
};

export default Show;
