import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage'
import AboutUs from './Pages/AboutUs/AboutUs'
import Courses from './Pages/Courses/Courses'
import Instructors from './Pages/Instructors/Instructors'
import Contact from './Pages/Contact/Contact'
import { AppContext } from './Context/AppContext';

function App() {

  return (
    <>
      <AppContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/instructors' element={<Instructors/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>

      </AppContext.Provider>
    </>
  );
}

export default App;
