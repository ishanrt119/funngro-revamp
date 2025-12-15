import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CompanyPage } from './pages/CompanyPage';
import { TeenPage } from './pages/TeenPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/hire-teens" replace />} />
          <Route path="/hire-teens" element={<CompanyPage />} />
          <Route path="/teen-jobs" element={<TeenPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
