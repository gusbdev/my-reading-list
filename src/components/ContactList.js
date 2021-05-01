import React, { useContext } from "react";
import ContactDetails from "./ContactDetails";
import { ContactContext } from "../contexts/ContactContext";

import { Link } from "react-router-dom";

const BookList = () => {
  const { contacts } = useContext(ContactContext);
  return contacts.length ? (
    <div className="book-list">
      <center>
        <button>
          <Link to="/">Cadastrar contato</Link>
        </button>
      </center>

      <ul>
        {contacts.map((contact) => {
          return <ContactDetails contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  ) : (
    <>
      <center>
        <button>
          <Link to="/">Cadastrar contato</Link>
        </button>
      </center>
      <div className="empty">Nenhum contato cadastrado :).</div>
    </>
  );
};

export default BookList;
