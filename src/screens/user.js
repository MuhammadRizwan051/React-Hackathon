import React, { useEffect, useState } from 'react'
// import MainLayout from './adminScreens/mainLayout'
import MainLayout from '../screens/mainLayout'
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../config/firebasemethod';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import Booking from './booking';

function User() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const list = [
    {
      name: 'Booking',
      url: 'transportBooking',
      element: <Booking />
    },
    
  ]

  let checkAuth = () => {
    setLoader(true);
    checkUser()
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/login");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    loader ?
      <SMFullScreenLoader /> :
      <>
        <MainLayout datasource={list} profileNode='profile' />
      </>
  );
}

export default User