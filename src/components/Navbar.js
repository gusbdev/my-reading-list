import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Minha lista de leitura</h1>
      <p>Atualmente você tem {books.length} livro(s) para ler...</p>
    </div>
  );
};

export default Navbar;
