import React, { useEffect, useState } from 'react'
import MainLayout from './adminScreens/mainLayout'
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../config/firebasemethod';
import SMFullScreenLoader from '../components/SMFullScreenLoader';
import Orders from './adminScreens/orders';
import Products from './adminScreens/products';

function Admin() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const list = [
    {
      name: 'Orders',
      url: 'orders',
      element: <Orders />
    },
    {
      name: 'Products',
      url: 'products',
      element: <Products />
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