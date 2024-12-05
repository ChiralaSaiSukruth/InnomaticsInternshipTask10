import React, { useState } from 'react'
import {AppBar, Tabs,Tab, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value,setValue]=useState()
  return (
    <div>
   <AppBar sx={{backgroundColor:"brown",textColor:"white", fontSize:"29px", fontWeight:"bold" }}position='sticky'>
    <Toolbar>
    <Typography style={{fontSize:"30px",fontWeight:"bold",justifyContent:"center",alignItems:"center"}}><LibraryBooksIcon/>Book Store</Typography>
    <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
        <Tab  LinkComponent={NavLink} to="/add" label="Add Products"/>
        <Tab LinkComponent={NavLink} to="/books" label="Books"/>
       
    </Tabs>
       
    </Toolbar>

   </AppBar>
    </div>
  )
}

export default Header