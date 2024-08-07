import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Durga from "./durga";
import './dashboard.css';
import BasicRating from"./ratingfile";
import Avatar from '@mui/material/Avatar';

const columns: GridColDef[] = [
 
     {
      field: 'avatar',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => (
        <Avatar src={params.value} alt="avatar" />
      ),
    },
  
  { field: 'firstName', headerName: 'Customer', width: 100 },
  //  {
  //   field: 'id',
  //   headerName: '',
  //   type: 'number',
  //   width: 90,
  // },
 
  {
    field: 'age',
    headerName: 'Order No',
    type: 'number',
    width: 90,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 90,
    
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 90,
  },
];

const rows = [
  
  { id:1, amount: 220, firstName: 'Cersei', age: 12342,status:"pickup"},
  { id:2, amount: 300, firstName: 'Jaime', age: 567745,status:"start"},
  { id:3, amount: 765, firstName: 'Arya', age: 345522,status:"delivered" },
  { id:4, amount: 765, firstName: 'ramana', age: 345522,status:"packing" },
  { id:5, amount: 765, firstName: 'Arya', age: 345522,status:"ordered" }
  
  
];

export default function DataTable() {
  return (
    <div style={{ height: 230, width: '500' }}>
    <h2>Recent Orders</h2>
      <div className="container">
      
      <div className="card">
      
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[4, 10]}
        
      />
      </div>
     
       
       <div className="card">
        <BasicRating />
      
      </div>
      </div>
    
     </div>
  );
}