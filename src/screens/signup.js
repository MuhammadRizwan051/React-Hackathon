import React, { useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethod";
import { Box } from "@mui/system";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../App.css';
import CircularProgress from "@mui/material/CircularProgress";
import userImg from '../assets/user.png'
import SMButton from "../components/SMButton";
import SMInput from "../components/SMInput";
import SMRadio from "../components/SMRadio";


function Signup() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const [list, setList] = useState([
    {
      fullName: 'Book a Ride',
      id: 'Book a Ride'
    },
    {
      fullName: 'Add Transport',
      id: 'Add Transport'
    }
  ])


  let signUp = () => {
    setIsLoading(true)
    signUpUser({ email, password, category })
      .then((success) => {
        setIsLoading(false)
        // Signed in
        navigate('/login')
        console.log(success);
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error);
      });
  };


  return (
    <>
      <Box className='signup'>
        <Box className='main' px={4} pt={5} pb={4}>
          <img src={userImg} width='100' height='100' />
          <h2 variant="h1" align="center" color="error">Signup
          </h2>
          <Box mt={3}>
            <Button variant="outlined" size="large" sx={{ width: '50%', fontWeight: 'bold', color: 'black' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button className='button' variant="contained" size="large" sx={{ width: '50%' }} onClick={() => navigate('/signup')}>
              Signup
            </Button>
          </Box>
          {/* <Box mt={4}>
            <TextField
              label="UserName"
              variant="outlined"
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box> */}
          <Box mt={2}>
            <SMInput
              label="Full Name"
              variant="outlined"
              fullWidth
              type="text"
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <SMInput
              label="Email"
              variant="outlined"
              fullWidth
              type="password"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <SMInput
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              placeholder='New Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box mt={2}>
            <SMRadio
              // label="Category"
              // variant="outlined"
              groupLabel='Category'
              datasource={list}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box my={2}>
            <SMButton label='SIGNUP' size="large" loading={isLoading} onClick={signUp} className='button' fullWidth='true' />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', }}>Already have an account ? <Link to="/" style={{ textDecoration: 'none' }}>LOGIN</Link></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
