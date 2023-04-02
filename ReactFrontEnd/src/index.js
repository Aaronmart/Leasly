import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './HomePage';
import AllApartmnts from './Components/AllApartmnts'
import ApartmentView from './Components/ApartmentView';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Messages from './Components/Messages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "*" element={<HomePage/>}/>
      <Route path = "/signup" element={<SignUp/>}/>
      <Route path = "/signin" element={<LogIn/>}/>
      <Route path = "/allapartments" element={<AllApartmnts/>}/>
      <Route path = "/apartmntview" element={<ApartmentView/>}/>
      <Route path = "/messages" element={<Messages/>}/>
    </Routes>
  </BrowserRouter>,
);


