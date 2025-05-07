import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
import AdminWomenAddShoes from './Admin/AdminWomenAddShoes';
import AdminManAddShoes from './Admin/AdminManAddShoes';
import AdminManShoes from './Admin/AdminManShoes';
import AdminManShoesCount from './Admin/AdminManShoesCount';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/Admin');

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
          <Route path='/AdminDashboard' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path='/AdminWomenShoes' element={<PrivateRoute><AdminWomenShoes /></PrivateRoute>} />
          <Route path='/AdminWomenAddShoes' element={<PrivateRoute><AdminWomenAddShoes /></PrivateRoute>} />
          <Route path='/AdminManAddShoes' element={<PrivateRoute><AdminManAddShoes /></PrivateRoute>} />
          <Route path='/AdminManShoes' element={<PrivateRoute><AdminManShoes /></PrivateRoute>} />
          <Route path='/AdminManShoesCount' element={<PrivateRoute><AdminManShoesCount /></PrivateRoute>} />
        </Routes>
      </PageTransitionLayout>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
