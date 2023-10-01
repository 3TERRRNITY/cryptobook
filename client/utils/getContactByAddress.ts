import Contact from "../Contact";
import contactFactory from "../contactFactory";

const getContactByAddress = async (address) => {
  const contactAddress = await contactFactory.ownerToContact(address);
  if (contactAddress.target === "0x0000000000000000000000000000000000000000") {
    throw new Error("This contact is not fined");
  }
  console.log("contactAddress: ", contactAddress);
  const contact = Contact(contactAddress);
  const telegram = await contact.telegram();
  console.log("telegram: ", telegram);
  const discord = await contact.discord();
  console.log("discord: ", discord);
  const description = await contact.description();
  console.log("description: ", description);
  return { telegram, discord, description };
};

export default getContactByAddress;
