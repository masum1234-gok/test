import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
