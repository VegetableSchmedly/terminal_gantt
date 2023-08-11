import React from "react";
import { Options } from '../data/GanttData'

// Import Highcharts
import Highcharts from "highcharts/highcharts-gantt";
import HighchartsReact from "highcharts-react-official";

const MyGantt = ({ movements }) => (
    <HighchartsReact
        highcharts={Highcharts}
        constructorType={"ganttChart"}
        options={Options(movements)}
    />
);

export default MyGantt;
