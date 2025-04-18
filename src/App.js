import './App.css';
import Layout from './Layout';
import NoLayout from './NoLayout';
import Homepage from './pages/Homepage';
import DonorPage from './pages/DonorPage';
import Blogs from './Blogs';
import Reciepientpage from './pages/Reciepientpage';
import Hospitaldash from './pages/Hospitaldash';
import Aboutuspage from './pages/Aboutuspage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/donorPage" element={<DonorPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reciepientpage" element={<Reciepientpage />} />
          <Route path="/hospitaldash" element={<Hospitaldash />} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
        </Route>

        {/* Routes without Navbar and Footer */}
        <Route element={<NoLayout />}>
          {/* You can add routes here that need NoLayout */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;