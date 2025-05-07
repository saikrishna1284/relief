import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import ReportsPage from './Components/ReportsPage';
import RequestsPage from './Components/RequestsPage';
import ContactsPage from './Components/ContactsPage';
import About from './Components/About';
import Login from './Components/Login';
import RegisterPage from './Components/RegisterPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/requests" element={<RequestsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;