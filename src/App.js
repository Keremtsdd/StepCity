import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryWomen from './Pages/CategoryWomen';
import CategoryMan from './Pages/CategoryMan';
import ScrollToTop from './Components/ScrollToTop';
import PagesScrollTop from "./Components/PagesScrollTop";
import CategoryWear from './Pages/CategoryWear';
import ManShoeDetail from './Pages/ManShoeDetail';
import WomenShoeDetail from './Pages/WomenShoeDetail';
import Footer from './Components/Footer';
import ShoeStore from './Pages/ShoeStore';

function App() {
  return (
    <>

      <PagesScrollTop />
      <ScrollToTop />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Kadın-Ayakkabı' element={<CategoryWomen />} />
        <Route path='/Erkek-Ayakkabı' element={<CategoryMan />} />
        <Route path='/Giyim' element={<CategoryWear />} />
        <Route path='/Sepetim' element={<ShoeStore />} />
        <Route path='/Kadın-Ayakkabı/:id' element={<WomenShoeDetail />} />
        <Route path='/Erkek-Ayakkabı/:id' element={<ManShoeDetail />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
