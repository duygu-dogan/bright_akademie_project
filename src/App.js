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

const baseURL = "https://my.api.mockaroo.com/instructors?key=7f8af780";
const config = { headers: { Authorization: `Bearer ${baseURL}`}}

function App() {
  const [instructor, setInstructor] = useState([]);
  const [insDetail, setInsDetail] = useState({});

  useEffect(() =>{
    Axios.get(`${baseURL}`)
      .then((response)=>{
        setInstructor(response.data);
      })
  }, []);
  
  const getIns = () =>{
    Axios
      .get(`https://my.api.mockaroo.com/instructors?key=7f8af780`, config)
      .then((response) => {setInsDetail(response.data)});
  }

   return (
    <>
      <AppContext.Provider value={{instructor, setInstructor, getIns, insDetail}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/instructors' element={<Instructors/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path={`/${instructor.first_name+'-'+instructor.last_name}`} element={<InstructorDetail/>} />
          </Routes>
        </BrowserRouter>

      </AppContext.Provider>
    </>
  );
}

export default App;
