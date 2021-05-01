import React, { useContext } from "react";
import { ContactContext } from "../contexts/ContactContext";
import trash from "../assets/delete_white_24dp.svg";

const ContactDetails = ({ contact }) => {
  const { dispatch } = useContext(ContactContext);
  return (
    <li>
      <div className="title">{contact.name}</div>
      <div className="author">{contact.phone}</div>
      <div className="email">{contact.email}</div>
      <button
        onClick={() => dispatch({ type: "REMOVE_CONTACT", id: contact.id })}
      >
        <img src={trash} alt="" />
      </button>
    </li>
  );
};

export default ContactDetails;
