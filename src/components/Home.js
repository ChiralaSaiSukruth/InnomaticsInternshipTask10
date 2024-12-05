import { Button,Typography,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <Box display="flex" flexDirection="column" alignItems="center">
<Button LinkComponent={Link} to="/books" sx={{marginTop:20,background:"orangered",width:400,height:100}}variant="contained">
  <Typography varient="h3" sx={{fontSize:25,fontFamily:"poppins"}}>VIEW ALL PRODUCTS</Typography>
</Button>
       </Box>
    </div>
  )
}

export default Home