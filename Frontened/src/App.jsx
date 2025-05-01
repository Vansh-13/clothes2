import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Couress from './courses/Couress';
import Signup from './compontents/Signup';
import { useAuth } from './context/Authprovider';
import Details from './compontents/Details';
import Example from './compontents/cartPage';
import Contact from './compontents/Contact';
import Women from "./compontents/Women";
import Kinds from "./compontents/Kinds";
import Men from "./compontents/Men";
import About from './compontents/About';
import Payment from "./compontents/Payment";
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import Course from './compontents/Course';
import { FaWindowMinimize } from 'react-icons/fa';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path='/cartpage' element={<Example />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/collections/kids' element={<Kinds/>} />
        <Route path='/collections/women' element={<Women/>} />
        <Route path='/collections/men' element={<Men/>} />
      </Routes>

    </>
  );
}

export default App;
