import './App.css';
import Layout from './Layout';
import NoLayout from './NoLayout';
import Homepage from './pages/Homepage';
import DonorPage from './pages/DonorPage';
import Blogs from './Blogs';
import Reciepientpage from './pages/Reciepientpage';
import Hospitaldash from './pages/Hospitaldash';
import Aboutuspage from './pages/Aboutuspage';
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <HashRouter>
        <ScrollToTop />
      <div className="App">

        <Routes>
          
          {/* Routes with Navbar and Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="donorPage" element={<DonorPage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="reciepientpage" element={<Reciepientpage />} />
            <Route path="hospitaldash" element={<Hospitaldash />} />
            <Route path="aboutuspage" element={<Aboutuspage />} />
          </Route>

          {/* Routes without Navbar and Footer */}
          <Route element={<NoLayout />}>
            {/* Future NoLayout routes can be added here */}
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </HashRouter>
  );
}

export default App;
