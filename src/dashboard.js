import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart/';
import Durga from "./durga";
import './dashboard.css'; // Import the CSS file
// import Chart from 'react-apexcharts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  '5',
  '10',
  '15',
  '20',
  '25',
  '30',
  '40',
];

export default function StackBars() {
  return (
    <div>
    <div></div>
    <div></div>
    <div className="container"  >
    
      
      <div className="card" >
      <h3 style={{color:"red"}}>Activity</h3>
        
      <BarChart
      width={500}
      height={230}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band',color:"blue" }]}
    />
        
      </div>
      <div className="card" style={{backgroundColor:"white"}}>
        <Durga />
      </div>
    </div>
    </div>
  );
}