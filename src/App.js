import React from 'react';
import './App.css';
import Header from './components/header/header';
import { Routes, Route, Link } from 'react-router-dom'
import Users from './components/user/user';
import Home from './components/home/home';
import Albums from './components/albums/albums';
import Photos from './components/photos/photos'
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/albums/:id/:photos' element={<Photos />} />
      </Routes>
    </div >
  );
}

export default App;
