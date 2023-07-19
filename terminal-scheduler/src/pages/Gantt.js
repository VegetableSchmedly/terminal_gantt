import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { useMovementsContext } from '../hooks/useMovementsContext';
import axios from 'axios'
// Import Highcharts
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsReact from "highcharts-react-official";


const Gantt = () => {

    const [movements, setMovements] = useState(null)

    useEffect(() => {
        const fetchMovements = async () => {
            const response = await fetch('/api/movements')
            const json = await response.json()

            if (response.ok) {
                setMovements(json)
            }
        }

        fetchMovements()
    }, [])

    // movements check to make sure the json is being held here.
    console.log(movements)


        // newData check to make sure the json is being held here.
    // console.log(newData)


  const [options] = useState({
    
    title: {
        text: 'Current Movements'
    },
    series: []
});


// Each series is a receiving tank/blend tank is the overall blend
//  series[i].data[0].name will be of total blend, soo use receiving tank.
//  series[i].data[j] will be individual moves within the blend, they have start
//      , end, completed %, dependency for subtasks, id can just be mongo _id


// JUST FOCUS ON GETTING DATA VISUAL UP. CAN WORK WITH MANIPULATING IT LATER.
//  

// let newData = []
// if (movements) {
//     for (let i = 0; i < movements.length; i++) {
//         newData.push({
//             name: movements[i].sendingVessel,
//             y: i,
//             start: movements[i].startTime,
//             end: movements[i].endTime
//         })
//     }

// }

//   options.series[0].data = newData
//   // check to make sure series data is accurate
//   console.log(options.series[0].data)

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"ganttChart"}
      options={options}
    />
  );
};

render(<Gantt />, document.getElementById("root"));

export default Gantt;