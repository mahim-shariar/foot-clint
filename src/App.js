import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home/Home';
import Headers from './Components/Shere/Header/Header';
import Footers from './Components/Shere/Footer/Footer';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import AddCart from './Components/DashBord/AddCart/AddCart';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
        <Headers></Headers>
        <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/SignUp' element={<SignUp></SignUp>} />
          {/* <PrivateRoute path='/cart' element={<AddCart></AddCart>} /> */}
        </Routes>
        <Footers></Footers>
      </BrowserRouter>
    </div>
  );
}

export default App;
