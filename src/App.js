import './App.css';
import Layout from './Layout';
import NoLayout from './NoLayout';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  DonorPage from './pages/DonorPage';
import Blogs from './components/Blogs';
import Reciepientpage from './pages/Reciepientpage';
import Hospitaldash from './pages/Hospitaldash'
import Aboutuspage from './pages/Aboutuspage';
function App() {
  return (
    <div className="App">
	 <Router>
        <Routes>
          {/* Routes that should have Navbar and Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/donorPage" element={<DonorPage />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/reciepientpage" element={<Reciepientpage />} />
            <Route path="/hospitaldash" element={<Hospitaldash />} />
            <Route path="/aboutuspage" element={<Aboutuspage />} />
          </Route>

          {/* Routes that should NOT have Navbar and Footer */}
          <Route element={<NoLayout />}>
            
          </Route>
        </Routes>
      </Router>
	</div>
  );
}

export default App;
