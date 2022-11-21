import React, { useEffect, useState } from 'react'
import MainLayout from './adminScreens/mainLayout'
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../config/firebasemethod';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import AddTransport from './adminScreens/addTransport';
import BookingDetails from './adminScreens/bookingDetails';

function Admin() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const list = [
    {
      name: 'Add Transport',
      url: 'addTransport',
      element: <AddTransport />
    },
    {
      name: 'Booking Details',
      url: 'bookingDetails',
      element: <BookingDetails />
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

export default Admin