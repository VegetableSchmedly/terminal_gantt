var today = new Date(),
    day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);


export const Options = (movements) => {

    // Create data structure for Highcharts Gantt chart
    const categories = ['Internal', 'Pipeline', 'Vessel', 'Railcar'];
    const series = categories.map(category => ({ name: category, data: [{ name: category, id: category, pointWidth: 3 }] }));

    if (movements) {
        for (let i = 0; i < movements.length; i++) {
            for (let j = 0; j < series.length; j++) {
                if (movements[i].category === series[j].name) {
                    const startTime = new Date(movements[i].startTime);
                    const endTime = new Date(movements[i].endTime);
                    series[j].data.push({
                        parent: movements[i].category,
                        name: movements[i].sendingVessel + " to " + movements[i].receivingVessel,
                        y: j,
                        start: startTime.getTime(),
                        end: endTime.getTime(),
                        actualStart: movements[i].startTime,
                        actualEnd: movements[i].endTime,
                        id: movements[i]._id
                    });
                }
            }
        }
    }
    return {
        chart:{
            styledMode: true
        },
        title: {
            text: 'Current Movements'
        },
        series,
        xAxis: {},
        yAxis: {},
        // accessibility: {
        //     keyboardNavigation: {
        //         seriesNavigation: {
        //             mode: 'serialize'
        //         }
        //     }
        // }
    };
}
