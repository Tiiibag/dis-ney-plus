import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="detail" element={<Detail/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App;
