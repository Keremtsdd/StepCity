import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PageTransitionLayout from "./Components/PageTransitionLayout";
import CategoryWomen from './Pages/CategoryWomen';
import CategoryMan from './Pages/CategoryMan';
import ScrollToTop from './Components/ScrollToTop';
import PagesScrollTop from "./Components/PagesScrollTop";
import CategoryWear from './Pages/CategoryWear';
import ManShoeDetail from './Pages/ManShoeDetail';
import WomenShoeDetail from './Pages/WomenShoeDetail';
import Footer from './Components/Footer';
import ShoeStore from './Pages/ShoeStore';
import Error from './Pages/Error';
import AdminWomenShoes from './Admin/AdminWomenShoes';
import AdminDashboard from './Admin/AdminDashboard';
import AdminLogin from './Admin/AdminLogin';


function App() {
  return (
    <>
      <PagesScrollTop />
      <ScrollToTop />
      <PageTransitionLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error />} />
          <Route path='/Kadın-Ayakkabı' element={<CategoryWomen />} />
          <Route path='/Erkek-Ayakkabı' element={<CategoryMan />} />
          <Route path='/Giyim' element={<CategoryWear />} />
          <Route path='/Sepetim' element={<ShoeStore />} />
          <Route path='/Kadın-Ayakkabı/:id' element={<WomenShoeDetail />} />
          <Route path='/Erkek-Ayakkabı/:id' element={<ManShoeDetail />} />

          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminDashboard' element={<AdminDashboard />} />
          <Route path='/AdminWomenShoes' element={<AdminWomenShoes />} />

        </Routes>
      </PageTransitionLayout>
      <Footer />
    </>
  );
}

export default App;
