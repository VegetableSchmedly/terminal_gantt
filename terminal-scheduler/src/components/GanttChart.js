import React from "react";
import { Options } from '../data/GanttData'

// Import Highcharts
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsReact from "highcharts-react-official";

const MyGantt = ({ movements }) => {
    console.log(Options(movements)); // log the data to the console
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={"ganttChart"}
                options={Options(movements)}
            />
        </div>
    );
};

export default MyGantt;
