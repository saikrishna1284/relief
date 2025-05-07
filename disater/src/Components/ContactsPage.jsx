import React from 'react';
import './ContactsPage.css';

const ContactsPage = () => {
  const emergencyContacts = [
    { id: 1, name: "District Emergency Office", category: "Government", phone: "1234567890" },
    { id: 2, name: "Red Cross", category: "NGO", phone: "9876543210" },
    { id: 3, name: "Local Hospital", category: "Medical", phone: "5551234567" }
  ];

  return (
    <div className="contacts-page">
      <h1>Emergency Contacts</h1>
      <button className="btn-primary">+ Add Contact</button>
      
      <div className="contacts-grid">
        {emergencyContacts.map(contact => (
          <div key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p><strong>Category:</strong> {contact.category}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <div className="contact-actions">
              <button className="btn-action">Call</button>
              <button className="btn-action">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;