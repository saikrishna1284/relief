import React, { useState } from 'react';
import './ReportsPage.css';

const ReportsPage = () => {
  const initialReports = [
    { id: 1, location: "Village A", type: "Flood", severity: "High", date: "2023-05-15", description: "Heavy flooding caused road blocks." },
    { id: 2, location: "Village B", type: "Earthquake", severity: "Medium", date: "2023-05-14", description: "Minor tremors felt." },
    { id: 3, location: "Village C", type: "Fire", severity: "Critical", date: "2023-05-13", description: "Wildfire destroyed several homes." }
  ];

  const [reports, setReports] = useState(initialReports);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    location: '',
    type: 'Flood',
    severity: 'High',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReportWithDate = {
      ...newReport,
      id: reports.length + 1, // Generate a unique id
      date: new Date().toLocaleDateString()
    };
    setReports([...reports, newReportWithDate]);
    setIsModalOpen(false);
    setNewReport({ location: '', type: 'Flood', severity: 'High', description: '' });
  };

  const filteredReports = reports
    .filter(report =>
      report.location.toLowerCase().includes(search.toLowerCase()) &&
      (filterType ? report.type === filterType : true)
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'severity') return a.severity.localeCompare(b.severity);
      return 0;
    });

  return (
    <div className="reports-page">
      <h1>Affected Area Reports</h1>

      <div className="report-controls">
        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
          <option value="">All Types</option>
          <option value="Flood">Flood</option>
          <option value="Earthquake">Earthquake</option>
          <option value="Fire">Fire</option>
        </select>

        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">Sort</option>
          <option value="date">Newest First</option>
          <option value="severity">Severity</option>
        </select>

        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>+ New Report</button>
      </div>

      <div className="reports-list">
        {filteredReports.map(report => (
          <div key={report.id} className={`report-card severity-${report.severity.toLowerCase()}`}>
            <h3>{report.location}</h3>
            <p><strong>Type:</strong> {report.type}</p>
            <p><strong>Severity:</strong> {report.severity}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <button className="btn-secondary" onClick={() => setSelectedReport(report)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedReport && (
        <div className="report-modal">
          <div className="report-modal-content">
            <h2>{selectedReport.location} - {selectedReport.type}</h2>
            <p><strong>Date:</strong> {selectedReport.date}</p>
            <p><strong>Severity:</strong> {selectedReport.severity}</p>
            <p>{selectedReport.description}</p>
            <button onClick={() => setSelectedReport(null)}>Close</button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Report New Disaster</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Location:
                <input
                  type="text"
                  value={newReport.location}
                  onChange={(e) => setNewReport({ ...newReport, location: e.target.value })}
                  required
                />
              </label>
              <label>
                Type:
                <select
                  value={newReport.type}
                  onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                >
                  <option value="Flood">Flood</option>
                  <option value="Earthquake">Earthquake</option>
                  <option value="Fire">Fire</option>
                </select>
              </label>
              <label>
                Severity:
                <select
                  value={newReport.severity}
                  onChange={(e) => setNewReport({ ...newReport, severity: e.target.value })}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Critical">Critical</option>
                </select>
              </label>
              <label>
                Description:
                <textarea
                  value={newReport.description}
                  onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
                  required
                />
              </label>
              <button type="submit" className="btn-primary">Submit Report</button>
              <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
