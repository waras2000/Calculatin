import './App.css';
import {useState} from "react"

import Navi from './Components/Navi';
import CompanyMetrics from './Components/CompanyMetrics';
//Took out NAV
import Chart1 from './Components/BarChart'

function App() {
  // Use this const in my other js file(The companymetrics.js)
  
 
  return (
  
  
      <div>
      
      <Navi/>


      <CompanyMetrics/>
       
        
      </div>
      
    
  );
}

export default App;
