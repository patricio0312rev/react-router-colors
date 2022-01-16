import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component';
import ColorScreenPage from './pages/color-screen/color-screen.component';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/color-screen/:color" element={<ColorScreenPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
