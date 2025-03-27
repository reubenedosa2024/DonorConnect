import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import Homepage from './Homepage';
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
