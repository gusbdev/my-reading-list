import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactList from "./components/ContactList";
import NewContactForm from "./components/NewContactForm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NewContactForm} />
        <Route path="/contacts" component={ContactList} />
      </Switch>
    </BrowserRouter>
  );
}
