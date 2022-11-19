import React, { useEffect, useState } from 'react'
import Cities from './adminScreens/cities'
import MainLayout from './adminScreens/mainLayout'
import loaderImg from "../assets/loader.gif";
import { useNavigate } from 'react-router-dom';
import { checkUser } from '../config/firebasemethod';
import Countries from './adminScreens/countries';
import SMFullScreenLoader from '../components/SMFullScreenLoader';

function Admin() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const list = [
    {
      name: 'Countries',
      url: 'countries',
      element: <Countries />
    },
    {
      name: 'Cities',
      url: 'cities',
      element: <Cities />
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
        <MainLayout datasource={list} />
      </>
  );
}

export default Admin