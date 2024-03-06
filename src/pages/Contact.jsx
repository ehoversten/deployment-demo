import React from 'react';
import ContactList from '../components/ContactList';
import SearchForm from '../components/SearchForm';

const Contact = () => {
  return (
    <div>
      <div className="container align-container">
        <h1 className="mt-5">Contact Me!</h1>
        <h2>I'm available for freelance work.</h2>
        <h2 className="mb-5">Live Long and Prosper</h2>
        <SearchForm />
      </div>
      <ContactList />
    </div>
  );
};

export default Contact;
