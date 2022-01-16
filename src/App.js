import {Route, Router, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
