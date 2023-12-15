import './App.css';
import React from 'react';
import TermAndCondition from '../src/components/T&c/TermAndCondition';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <>
   <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/terms&condition' element={<TermAndCondition/>} />
                    <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
                </Routes>
            </Router> 
    </>
  );
}

export default App;
