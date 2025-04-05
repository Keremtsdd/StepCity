import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryWomen from './Pages/CategoryWomen';
import ScrollToTop from './Components/ScrollToTop';
import PagesScrollTop from "./Components/PagesScrollTop";

function App() {
  return (
    <BrowserRouter>

      <PagesScrollTop />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Women" element={<CategoryWomen />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
