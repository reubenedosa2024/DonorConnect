import './App.css';
import Layout from './Layout';
import NoLayout from './NoLayout';
import Homepage from './Homepage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  DonorPage from './DonorPage'
function App() {
  return (
    <div className="App">
	 <Router>
        <Routes>
          {/* Routes that should have Navbar and Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/donorPage" element={<DonorPage />} />
            
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
