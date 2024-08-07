import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Durga from "./durga";
import Sidebar from "./sidebar";
// import PrimarySearchAppBar from"./header";
// import StackBars from"./dashboard/dashboard";
// import DataTable from "./main"
// import SpacingGrid from "./first"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Durga /> */}
    <Sidebar/>
    // {/* <DataTable/> */}
     {/* <SpacingGrid/> */}
    {/* <MainContent/> */}
    {/* <StackBars/> */}
    {/* <PrimarySearchAppBar/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
