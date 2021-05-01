import React, { useContext } from "react";
import { ContactContext } from "../contexts/ContactContext";
import "../index.css";

const Navbar = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <div className="navbar">
      <h1>Minha lista de contatos</h1>
      <p>Atualmente você tem {contacts.length} contato(s) armazenado(s)..</p>
    </div>
  );
};

export default Navbar;
