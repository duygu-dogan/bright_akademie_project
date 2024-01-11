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


const baseURL = "https://my.api.mockaroo.com/instructors?key=7f8af780";
const baseURLCourses = "https://mocki.io/v1/9c43500f-d10d-422e-9e33-f2696c9b32b9";

function App() {
  const [instructor, setInstructor] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() =>{
    Axios.get(`${baseURL}`)
      .then((response)=>{
        setInstructor(response.data);
      })
  }, []);

  useEffect(()=>{
    Axios.get(`${baseURLCourses}`)
    .then((res) =>{
      setCourses(res.data);
    })
  }, []);

   return (
    <>
      <AppContext.Provider value={{instructor, setInstructor, courses, setCourses}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/instructors' element={<Instructors/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/details/:id' element={<InstructorDetail/>} />
            <Route path='/course-details/:id' element={<CoursesDetail/>} />
          </Routes>
        </BrowserRouter>

      </AppContext.Provider>
      
    </>
  );
}

export default App;
library.add(fab, fas, far);
