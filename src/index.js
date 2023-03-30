import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componentlist/About';
import Apidata from './componentlist/Apidata';
import Contactus from './componentlist/Contactus';
import Datail from './componentlist/Datail';
import Error from './componentlist/Error';
import Landingpage from './componentlist/Landingpage';
import Mynav from './componentlist/Mynav';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <BrowserRouter>
    <Mynav></Mynav>
        <Routes>
           <Route path='' element={<Landingpage/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contactus/>}/>
           <Route path='*' element={<Error/>}/>
           <Route path='datail' element={<Datail/>}/>
           <Route path='apidata' element={<Apidata/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
