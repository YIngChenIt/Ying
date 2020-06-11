import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react-monitor" : "";

function App() {
  return (
    <Router basename={BASE_NAME}>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
