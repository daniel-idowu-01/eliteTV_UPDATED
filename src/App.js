import React from 'react'
import Navbar from './components/Nav';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Routes, Route } from 'react-router-dom';
import { SearchProvider } from './data/SearchContext';

function App() {

  return (
    <div className='app bg-deepNavyBlue bg-opacity-90 text-white'>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/search' element={ <SearchPage /> } />
        </Routes>
      </SearchProvider>
      
    </div>
  );
}

export default App;