import React, { useEffect, useState } from 'react'
import MainLayout from './transporterScreens/mainLayout'
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../config/firebasemethod';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import AddTransport from './transporterScreens/addTransport';
import BookingDetails from './transporterScreens/bookingDetails';

function Transporter() {
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

export default Transporter