import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import GroupsIcon from '@mui/icons-material/Groups';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
 
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "white",
  height: '150px', // Add height here
  width: '100%'
}));

export default function SpacingGrid() {
  return (
    <div>
      <h2>Dashboard</h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item style={{textAlign: 'center',}}> Orders <div><BreakfastDiningIcon style={{backgroundColor:"red" }}/><div></div>3456</div></Item>
          
          
        </Grid>
        <Grid item xs={2} >
  <Item>Total Customer<div><GroupsIcon style={{backgroundColor:"red"}}/><div></div>3456</div></Item>
</Grid>
<Grid item xs={2} >
  <Item>Total Canceled <div><DisabledByDefaultIcon style={{backgroundColor:"red"}}/><div></div>45</div></Item>
</Grid>
<Grid item xs={2} >
<Item styled={{ backgroundColor: 'white', padding: 2 }}>
          Total Delivered<div><RoomServiceIcon style={{backgroundColor:"red"}}/><div></div>567</div>
        </Item>
</Grid>

      <Grid item xs={2} md={4}>
  <Item>Total Amount <div><AttachMoneyIcon style={{backgroundColor:"red"}}/><div></div>$ 145678</div></Item>
      </Grid>
      </Grid>
    </Box>
    </div>
  );
}
