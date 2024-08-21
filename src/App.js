import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from './pages/Register';
import HeaderApp from './pages/Header';
import HomeApp from './pages/Home';
import Footer from './pages/Footer';
import { ProductDetail } from './pages/ProductDetail';
import { useEffect } from 'react';



function App() {
  const dataAcc = localStorage.getItem('account');

  const config = {
    apiKey: 'AIzaSyAJvq5ASEnEs1WEgc5bFmpt5lDxC1ePZ30',
    authDomain: 'pyroshop-9a57d.firebaseapp.com'
  }

  firebase.initializeApp(config);
  useEffect(() => {
    if (!dataAcc) {
      let dataAccoount = [
        {
          id: 1,
          username: 'admin',
          email: 'admin@gmail.com',
          password: '1',
        },
        {
          id: 2,
          username: 'admin2',
          email: 'admin2@gmail.com',
          password: '1',
        }
      ];

      localStorage.setItem('account', JSON.stringify(dataAccoount));
    }
  }, [dataAcc])

  return (
    <BrowserRouter>

      <div className="App">
        <HeaderApp />
        <Routes>
          <Route path='/' exact element={<HomeApp />}></Route>
          <Route path='/login' exact element={<Login />}></Route>
          <Route path='/register' exact element={<Register />}></Route>
          <Route path='/product/:id' exact element={<ProductDetail />}></Route>

        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
