import {Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import { AppContext } from './Context/AppContext';

function App() {
  
  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route />
          </Routes>
        </BrowserRouter>

      </AppContext.Provider>
    </>
  );
}

export default App;
