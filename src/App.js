import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
