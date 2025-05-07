import React, { useState } from 'react';
import './RequestsPage.css';

const RequestsPage = () => {
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [disasterType, setDisasterType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Emergency details submitted:\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nDisaster Type: ${disasterType}`
    );
  };

  const sampleRequests = [
    { id: 1, type: "Food", quantity: "100 kits", location: "Village A", status: "Pending" },
    { id: 2, type: "Medical", quantity: "50 kits", location: "Village B", status: "In Progress" },
    { id: 3, type: "Shelter", quantity: "20 tents", location: "Village C", status: "Completed" }
  ];

  return (
    <div className="page-container">
      {/* Emergency Section */}
      <div className="emergency-container">
        <h2 className="emergency-title">Emergency Assistance</h2>

        <form onSubmit={handleSubmit} className="emergency-form">
          <div className="form-field">
            <label className="form-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 9876543210"
              pattern="[0-9]{10}"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Disaster Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Village Name, District"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Type of Disaster:</label>
            <select
              value={disasterType}
              onChange={(e) => setDisasterType(e.target.value)}
              className="form-input"
              required
            >
              <option value="">-- Select Disaster Type --</option>
              <option value="Flood">Flood</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Cyclone">Cyclone</option>
              <option value="Fire">Fire</option>
              <option value="Landslide">Landslide</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="form-button">Submit</button>
        </form>

        <div className="emergency-contacts">
          <h3 className="contacts-title">Emergency Contact Numbers:</h3>
          <ul className="contacts-list">
            <li><strong>Disaster Helpline:</strong> 108 / 112</li>
            <li><strong>Fire & Rescue:</strong> 101</li>
            <li><strong>Ambulance:</strong> 102</li>
            <li><strong>Local Police:</strong> 100</li>
            <li><strong>District Collector Office:</strong> +91-12345-67890</li>
          </ul>
        </div>

        <div className="safety-tips">
          <h3 className="tips-title">Disaster Safety Tips:</h3>
          <ul className="tips-list">
            <li>Stay calm and alert. Do not panic.</li>
            <li>Listen to local authorities and follow official updates.</li>
            <li>Keep an emergency kit with essentials like water, food, and first aid.</li>
            <li>Help elderly and children first.</li>
            <li>Evacuate if advised and use safe routes.</li>
          </ul>
        </div>
      </div>

      {/* Relief Requests Section */}
      <div className="requests-page">
        <h2>Relief Requests</h2>
        <button className="btn-primary">+ New Request</button>
        <table className="requests-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleRequests.map(request => (
              <tr key={request.id}>
                <td>{request.type}</td>
                <td>{request.quantity}</td>
                <td>{request.location}</td>
                <td>
                  <span className={`status-${request.status.toLowerCase().replace(' ', '-')}`}>
                    {request.status}
                  </span>
                </td>
                <td>
                  <button className="btn-action">View</button>
                  <button className="btn-action">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestsPage;
