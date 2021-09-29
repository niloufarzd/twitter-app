import React from 'react';
import './App.css';
import { Layout } from './Component/Layout';
import useStyle from './Component/Styles'
import { Divider } from '@mui/material';


import './App.css';




function App() {
   const classes =useStyle();
  return (
    <div className={classes.root}>
      <Divider></Divider>
     <Layout></Layout>
    </div>
  );
}

export default App;
