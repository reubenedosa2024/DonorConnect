import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Homepage from './pages/Homepage';
function Layout() {
return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
);
}

export default Layout;
