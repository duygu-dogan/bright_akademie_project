import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage'
import AboutUs from './Pages/AboutUs/AboutUs'
import Courses from './Pages/Courses/Courses'
import Instructors from './Pages/Instructors/Instructors'
import Contact from './Pages/Contact/Contact'
import { AppContext } from './Context/AppContext';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import InstructorDetail from './Pages/InstructorDetail/InstructorDetail';
import CoursesDetail from './Pages/CoursesDetail/CoursesDetail';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const baseURLCourses = "https://mocki.io/v1/9c43500f-d10d-422e-9e33-f2696c9b32b9";
const baseURL = "https://mocki.io/v1/6958d6be-32e0-4130-94bd-a90dc81aba7b";

function App() {
  const [courses, setCourses] = useState([]);
  const [instructorArr, setInstructorArr] = useState([]);

  useEffect(() => {
    Axios.get(`${baseURLCourses}`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, []);

  useEffect(() => {
    Axios.get(`${baseURL}`)
      .then((response) => {
        setInstructorArr(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
  }, []);

  return (
    <>
      <AppContext.Provider value={{ courses, instructorArr }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='details/:id' element={<InstructorDetail />} />
            <Route path='/courses/details/:id' element={<CoursesDetail />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>

    </>
  );
}

export default App;
library.add(fab, fas, far);
