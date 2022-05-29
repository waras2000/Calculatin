
import React, { useEffect,useState} from "react"
import './new.css';
import { Bar, Line } from "react-chartjs-2";
import { registerables } from "chart.js";
//NOTE: DOESNT ACCOUNT FOR COMMAS YET
//NOTE: NEED TO ADD IN SOME SORT OF DIAGNOSIS TELLING THE USER IF REVENUE AND
//CASH FLOW ARE RELIABLE OR VOLATILE
//Add in Debt-> Calculate if debt can be paid off
//Rando
//Compare to US INFLATION AND GDP AND GENERAL MARKET
const CompanyMetrics=(props)=>{


const [cashPeriod_1, setCashPeriod_1] = useState('');
const [cashPeriod_2, setCashPeriod_2] = useState('');
const [cashPeriod_3, setCashPeriod_3] = useState('0');
const [cashPeriod_4, setCashPeriod_4] = useState('0');
const [cashPeriod_5, setCashPeriod_5] = useState('0');
const [cashPeriod_6, setCashPeriod_6] = useState('0');
const [cashPeriod_7, setCashPeriod_7] = useState('0');
const [cashPeriod_8, setCashPeriod_8] = useState('0');
const [cashPeriod_9, setCashPeriod_9] = useState('0');
const [cashPeriod_10, setCashPeriod_10] = useState('0');

const [revPeriod_1, setRevPeriod_1] = useState('');
const [revPeriod_2, setRevPeriod_2] = useState('');
const [revPeriod_3, setRevPeriod_3] = useState('0');
const [revPeriod_4, setRevPeriod_4] = useState('0');
const [revPeriod_5, setRevPeriod_5] = useState('0');
const [revPeriod_6, setRevPeriod_6] = useState('0');
const [revPeriod_7, setRevPeriod_7] = useState('0');
const [revPeriod_8, setRevPeriod_8] = useState('0');
const [revPeriod_9, setRevPeriod_9] = useState('0');
const [revPeriod_10, setRevPeriod_10] = useState('0');


const[cashflowAverage_1,setCashFlowAverage_1]=useState(0);
const[cashflowAverage_2,setCashFlowAverage_2]=useState(0);
const[cashflowAverage_3,setCashFlowAverage_3]=useState(0);
const[cashflowAverage_4,setCashFlowAverage_4]=useState(0);
const[cashflowAverage_5,setCashFlowAverage_5]=useState(0);
const[cashflowAverage_6,setCashFlowAverage_6]=useState(0);
const[cashflowAverage_7,setCashFlowAverage_7]=useState(0);
const[cashflowAverage_8,setCashFlowAverage_8]=useState(0);
const[cashflowAverage_9,setCashFlowAverage_9]=useState(0);
const[cashflowAverage_10,setCashFlowAverage_10]=useState(0);



var cashArray= Array(parseInt(cashPeriod_1),parseInt(cashPeriod_2),parseInt(cashPeriod_3),parseInt(cashPeriod_4),parseInt(cashPeriod_5)
  ,parseInt(cashPeriod_6), parseInt(cashPeriod_7), parseInt(cashPeriod_8), parseInt(cashPeriod_9), parseInt(cashPeriod_10));

  var revArray= Array(parseInt(revPeriod_1),parseInt(revPeriod_2),parseInt(revPeriod_3),parseInt(revPeriod_4),parseInt(revPeriod_5)
    ,parseInt(revPeriod_6), parseInt(revPeriod_7), parseInt(revPeriod_8), parseInt(revPeriod_9), parseInt(revPeriod_10));


let averageRevenue=()=>{
  //setAverageRevenue(
    //(
     // parseInt(revPeriod_1)+parseInt(revPeriod_2)+parseInt(revPeriod_3)
   // +parseInt(revPeriod_4)+parseInt(revPeriod_5)+parseInt(revPeriod_6)+parseInt(revPeriod_7)+parseInt(revPeriod_8)
   // +parseInt(revPeriod_9)+parseInt(revPeriod_10))/10
//)
var sum = 0;
var len=0;
// Calculation the sum using forEach
revArray.forEach(x => {
  sum += x;
  if (x>0){
    
    len+=1;
  }
});
setAverageRevenue(
  sum/len

)


  


}



let averageCashflow=()=>{
    
  var sum = 0;
  var len=0;
  // Calculation the sum using forEach
  cashArray.forEach(x => {
    sum += x;
    if (x>0){
      
      len+=1;
    }
  });

    // let all_cashflows=[period_1,period_2,period_3,period_4,period_5,period_6,period_7,period_8,period_9,period_10];

    // setAveragecashflow((parseInt(period_1)+period_2+period_3+period_4+period_5+period_6+period_7+period_8+period_9+period_10)/10)
    setAveragecashflow
        (
          sum/len
        )
        
       

}


const[totalAvgCash, setTotalAvgCash]= useState();


const[accumAverageCashflow, setAccumAverageCashflow]= useState(0);

const[cash_list,setcash_list] = useState([]);


//Currently its not working since we have to use the button 
//and then re-render the chart
useEffect(()=>{
  var sum=0
  var len=0
  cashArray.forEach(x => {
    sum += x;
    if (x>0){
      len+=1;
    }
  })


  setAccumAverageCashflow(
    sum/len
  )

  })

const UserData = [
  
    {
      
      period: '1',
    
      currentCashflowPeriod: cashPeriod_1,
      currentRevenuePeriod:revPeriod_1,
      currentCashflowAverage:cashPeriod_1,
      currentRevenueAverage:revPeriod_1,
      accumAverageCashflow:accumAverageCashflow,
      
      
      


   
      
      
      
    },
    {
      period: '2',
      currentCashflowPeriod: cashPeriod_2,
      currentRevenuePeriod:revPeriod_2,
      currentCashflowAverage:((parseInt(cashPeriod_1)+parseInt(cashPeriod_2))/2),
      currentRevenueAverage:((parseInt(revPeriod_1)+parseInt(revPeriod_2))/2),
      accumAverageCashflow:accumAverageCashflow
      

      
    },
    {
      period: '3',
      currentCashflowPeriod: cashPeriod_3,
      currentRevenuePeriod:revPeriod_3,
      currentCashflowAverage:((parseInt(cashPeriod_2)+parseInt(cashPeriod_3))/2),
      currentRevenueAverage:((parseInt(revPeriod_2)+parseInt(revPeriod_3))/2),
      accumAverageCashflow:accumAverageCashflow
    },
    {
      period: '4',
      currentCashflowPeriod: cashPeriod_4,
      currentRevenuePeriod:revPeriod_4,
      currentCashflowAverage:(parseInt(cashPeriod_3)+parseInt(cashPeriod_4))/2,
      currentRevenueAverage:((parseInt(revPeriod_3)+parseInt(revPeriod_4))/2),
      accumAverageCashflow:accumAverageCashflow,
    },
    {
      period: '5',
      currentCashflowPeriod: cashPeriod_5,
      currentRevenuePeriod:revPeriod_5,
      currentCashflowAverage:(parseInt(cashPeriod_4)+parseInt(cashPeriod_5))/2,
      currentRevenueAverage:((parseInt(revPeriod_4)+parseInt(revPeriod_5))/2),
      accumAverageCashflow:accumAverageCashflow,
    },
    {period: '6',
    currentCashflowPeriod: cashPeriod_6,
    currentRevenuePeriod:revPeriod_6,
    currentCashflowAverage:(parseInt(cashPeriod_5)+parseInt(cashPeriod_6))/2,
    currentRevenueAverage:((parseInt(revPeriod_5)+parseInt(revPeriod_6))/2),
    accumAverageCashflow:accumAverageCashflow,
    },
    {period: '7',
    currentCashflowPeriod: cashPeriod_7,
    currentRevenuePeriod:revPeriod_7,
    currentCashflowAverage:(parseInt(cashPeriod_6)+parseInt(cashPeriod_7))/2,
    currentRevenueAverage:((parseInt(revPeriod_6)+parseInt(revPeriod_7))/2),
    accumAverageCashflow:accumAverageCashflow,
    },
    {period: '8',
    currentCashflowPeriod: cashPeriod_8,
    currentRevenuePeriod:revPeriod_8,
    currentCashflowAverage:(parseInt(cashPeriod_7)+parseInt(cashPeriod_8))/2,
    currentRevenueAverage:((parseInt(revPeriod_7)+parseInt(revPeriod_8))/2),
    accumAverageCashflow:accumAverageCashflow,
    },
    {period: '9',
    currentCashflowPeriod: cashPeriod_9,
    currentRevenuePeriod:revPeriod_9,
    currentCashflowAverage:(parseInt(cashPeriod_8)+parseInt(cashPeriod_9))/2,
    currentRevenueAverage:((parseInt(revPeriod_8)+parseInt(revPeriod_9))/2),
    accumAverageCashflow:accumAverageCashflow,
    },
    {period: '10',
    currentCashflowPeriod: cashPeriod_10,
    currentRevenuePeriod:revPeriod_10,
    currentCashflowAverage:(parseInt(cashPeriod_9)+parseInt(cashPeriod_10))/2,
    currentRevenueAverage:((parseInt(revPeriod_9)+parseInt(revPeriod_10))/2),
    accumAverageCashflow:accumAverageCashflow,
    },
  ];
  function addDate(){
    
  }
const[average_revenue,setAverageRevenue] = useState(0);
const[average_cashflow,setAveragecashflow]= useState(0);
const[currentCashflowAverage,setCurrentCashflowAverage]= useState(0);
const[currentRevenueAverage,setCurrentRevenueAverage]=useState(0);

 

  const [cashflowData,setCashflowData] = useState({
      

    labels: UserData.map((data)=>data.period),
    datasets: [{
      label: "Cashflow Over Time",
      order:2,
      backgroundColor:[
        'rgba(255,178,218,.8)'
      ],
        data: UserData.map((data)=>data.currentCashflowPeriod),
        
       

    },
    {
      type:'line',
      label:"TTM Average Cashflow",
      borderColor:[
        'rgba(255,26,104,1'
      ],
      data: UserData.map((data)=>data.currentCashflowAverage)
    },
  {
    type:'line',
    label:"All Time Average Cashflow",
    data: UserData.map((data)=>data.accumAverageCashflow)
    
  }]
   
  


})




 
useEffect(()=>{
  setCashflowData({
  labels: UserData.map((data)=>data.period),
  datasets: [{
    label: "Cashflow Over Time",
    order:2,
    backgroundColor:[
      'rgba(255,178,218,.8)'
    ],
      data: UserData.map((data)=>data.currentCashflowPeriod),
      
     

  },
  {
    type:'line',
    label:"TTM Average Cashflow",
    order:1,
    borderColor:[
      'rgba(255,26,104,1)'],
    data: UserData.map((data)=>data.currentCashflowAverage)

    
  },
  {
    type:'line',
    order:1,
    borderColor:[
      'rgba(157,0,81,.8)'],
    label:"All Time Average Cashflow",
    data: UserData.map((data)=>data.accumAverageCashflow)
    
  }]


})


},[cashPeriod_1,cashPeriod_2,cashPeriod_3,cashPeriod_4,cashPeriod_5,cashPeriod_6,cashPeriod_7,cashPeriod_8,cashPeriod_9,cashPeriod_10])

 
const [revenueData,setRevenueData] = useState({
      

  labels: UserData.map((data)=>data.period),
  datasets: [{
      label: "Revenue Over Time",
      
      data:UserData.map((data)=>data.currentRevenuePeriod)
     

  },
  {
    
    type:'line',
  order:1,
  label:"TTM Average Revenue",
  borderColor:[
    'rgba(18,18,18,.8)'
    ],
    data: UserData.map((data)=>data.currentRevenueAverage)
  }]
 



})




useEffect(()=>{
setRevenueData({
labels: UserData.map((data)=>data.period),
datasets: [{
  label: "Revenue Over Time",
  order:2,
  backgroundColor:[
    'rgba(42,38,40,.8)'
  ],
    
    data: UserData.map((data)=>data.currentRevenuePeriod)
    
   

},
{
  type:'line',
  order:1,
  label:"TTM Average Revenue",
  borderColor:[
    'rgba(18,18,18,.8)'
  ],
  data: UserData.map((data)=>data.currentRevenueAverage)
}



]





}

)



},[revPeriod_1,revPeriod_2,revPeriod_3,revPeriod_4,revPeriod_5,revPeriod_6,revPeriod_7,revPeriod_8,revPeriod_9,revPeriod_10])



const [accumData,setAccumData] = useState({
      

  labels: UserData.map((data)=>data.period),
  datasets: [{
    label: "Revenue Over Time",
    order:2,
    backgroundColor:[
      'rgba(42,38,40,.8)'
    ],
      
      data:UserData.map((data)=>data.currentRevenuePeriod)
     

  },
{
  label:"Cashflow Over Time",
  data:UserData.map((data)=>data.currentCashflowPeriod)

},
]
 



})




useEffect(()=>{
setAccumData({
labels: UserData.map((data)=>data.period),
datasets: [{
    label: "Revenue Over Time",
    order:2,
    backgroundColor:[
      'rgba(42,38,40,.8)'
    ],
    data: UserData.map((data)=>data.currentRevenuePeriod)
    
   

},
{
  label: "Cashflow Over Time",
  order:2,
  backgroundColor:[
    'rgba(255,178,218,.8)'
  ],
  data: UserData.map((data)=>data.currentCashflowPeriod)
},
{
  type:'line',
  label:"TTM Average Cashflow",
  order:1,
  borderColor:[
    'rgba(255,26,104,1)'
  ],
  data: UserData.map((data)=>data.currentCashflowAverage)

},
{
  type:'line',
  order:1,
  label:"TTM Average Revenue",
  borderColor:[
    'rgba(18,18,18,.8)'
  ],
  data: UserData.map((data)=>data.currentRevenueAverage)
}

]





}

)



},[revPeriod_1,revPeriod_2,revPeriod_3,revPeriod_4,revPeriod_5,revPeriod_6,revPeriod_7,revPeriod_8,revPeriod_9,revPeriod_10,cashPeriod_1,
  cashPeriod_2,cashPeriod_3,cashPeriod_4,cashPeriod_5,cashPeriod_6,cashPeriod_7,cashPeriod_8,cashPeriod_9,cashPeriod_10])




   






// const [accumData,setaccumData] = useState({
      

//   labels: UserData.map((data)=>data.period),
//   datasets: [{
//       label: "Revenue and Cashflow Over Time",
      
//       data:UserData.map((data)=>data.currentRevenuePeriod),
//       UserData.map((data)=>data.currentRevenuePeriod)

     

//   }]



// })




// useEffect(()=>{
// setRevenueData({
// labels: UserData.map((data)=>data.period),
// datasets: [{
//     label: "Revenue Over Time",
//     data: UserData.map((data)=>data.currentRevenuePeriod),
    
   

// }]


// })



// },[revPeriod_1,revPeriod_2,revPeriod_3,revPeriod_4,revPeriod_5,revPeriod_6,revPeriod_7,revPeriod_8,revPeriod_9,revPeriod_10])












// let handle_product=()=>{
    // setproductup1(num1*num2)
    
// }



    return(
<div className="mainContainer">
  <div className="CalculatorContainer">
        <div className="CashFlowCalculator">
          <h1>Enter Cashflow Periods</h1>
        
          <input id='fiv'  type="text" className="inputStyle" onChange= {e=>setCashPeriod_1(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 1 Cashflow"  />
          <br/><br/>
  
          <input   type="text" className="inputStyle"  onChange= {e=>setCashPeriod_2(e.target.value.replace(/,/g, ""))}placeholder="Enter Year 2 Cashflow" />
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_3(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 3 Cashflow"/>
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_4(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 4 Cashflow"/>
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_5(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 5 Cashflow"/>
          <br/><br/>
          <input   type="text" className="inputStyle"  onChange= {e=>setCashPeriod_6(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 6 Cashflow"/>
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_7(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 7 Cashflow"/>
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_8(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 8 Cashflow"/>
          <br/><br/>
          <input  type="text" className="inputStyle"  onChange= {e=>setCashPeriod_9(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 9 Cashflow"/>
          <br/><br/>
          <input type="text" className="inputStyle"  onChange= {e=>setCashPeriod_10(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 10 Cashflow"/>
          <br/><br/>
  
          <button onClick={averageCashflow}>Calculate Average Cashflow</button> 
          <br/><br/>
       
          <input type="text" className="outStyle" value={average_cashflow}/>
  
          <br/><br/>
          <Bar value="This" data={cashflowData} />
        </div>



          <div className="RevenueEncompass">



          <h1>Revenue</h1>
        
        <input id='fiv'  type="text" className="inputStyle" onChange= {e=>setRevPeriod_1(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 1 Revenue"  />
        <br/><br/>

        <input   type="text" className="inputStyle"  onChange= {e=>setRevPeriod_2(e.target.value.replace(/,/g, ""))}placeholder="Enter Year 2 Revenue" />
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_3(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 3 Revenue"/>
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_4(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 4 Revenue"/>
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_5(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 5 Revenue"/>
        <br/><br/>
        <input   type="text" className="inputStyle"  onChange= {e=>setRevPeriod_6(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 6 Revenue"/>
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_7(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 7 Revenue"/>
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_8(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 8 Revenue"/>
        <br/><br/>
        <input  type="text" className="inputStyle"  onChange= {e=>setRevPeriod_9(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 9 Revenue"/>
        <br/><br/>
        <input type="text" className="inputStyle"  onChange= {e=>setRevPeriod_10(e.target.value.replace(/,/g, ""))} placeholder="Enter Year 10 Revenue"/>
        <br/><br/>

        <button onClick={averageRevenue}  >Calculate Average Revenue</button> 
        <br/><br/>
     
        <input type="text" className="outStyle" value={average_revenue}/>

        <br/><br/>
        <Bar value="This" data={revenueData}  />





          </div>

  </div>

<div class="AccumChart">
      <Bar data={accumData}/>
      </div>

         


        
</div>
      )
    
  } 
  export default CompanyMetrics;

 