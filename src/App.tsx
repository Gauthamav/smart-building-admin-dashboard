import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Organization from './pages/Organization';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/organization" element={<Organization />}></Route>
      </Routes>
    </main>
  );
}

export default App;
