import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MonitorWeightRoundedIcon from '@mui/icons-material/MonitorWeightRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: '123px', xs: '100px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="10px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', marginTop: '0' }} />
    </Link>
    <Stack
      direction="row"
      display="flex"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
      justifyContent="space-around"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}> <HomeRoundedIcon style={{ fontSize: '48px' }} /> </Link>
      <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}><MonitorWeightRoundedIcon style={{ fontSize: '43px' }} /> </Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625 ' }}> <FitnessCenterRoundedIcon style={{ fontSize: '43px' }} /></a>
    </Stack>
  </Stack>
);

export default Navbar;
