import React from "react";
import {
  ContactContainer,
  ContactTitleContainer,
  Subtitle,
  Title,
} from "../styles/ContactInfo";

interface ContactInfoProps {
  telegram?: string;
  discord?: string;
  description?: string;
}

const ContactInfo = ({ telegram, discord, description }: ContactInfoProps) => {
  return (
    <ContactContainer>
      {telegram && (
        <ContactTitleContainer>
          <Title>Telegram 📩</Title>
          <Subtitle>@{telegram}</Subtitle>
        </ContactTitleContainer>
      )}
      {discord && (
        <ContactTitleContainer>
          <Title>Discord 👽</Title>
          <Subtitle>{discord}</Subtitle>
        </ContactTitleContainer>
      )}
      {description && (
        <ContactTitleContainer>
          <Title>Description 📃</Title>
          <Subtitle>{description}</Subtitle>
        </ContactTitleContainer>
      )}
    </ContactContainer>
  );
};

export default ContactInfo;
