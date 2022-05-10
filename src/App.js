import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './container/Login.js';
import Register from './container/Register.js';
import Navigationbar from './container/Navigationbar';
import Dashboard from './container/Dashboard';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/navigationbar" element={<Navigationbar />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
