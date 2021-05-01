import React, { useContext, useState } from "react";
import { ContactContext } from "../contexts/ContactContext";

import { Link } from "react-router-dom";

const NewContactForm = () => {
  const { dispatch } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", contact: { name, phone, email } });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <>
      <center>
        <button>
          <Link to="/contacts">Mostrar contatos</Link>
        </button>
      </center>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do contato"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Número de telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Adicionar contato" />
      </form>
    </>
  );
};

export default NewContactForm;
