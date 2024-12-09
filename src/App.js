import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/SignUp"
            element={<SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
