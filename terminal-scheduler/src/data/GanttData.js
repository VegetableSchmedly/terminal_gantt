export const Options = (movements) => {
    // Create data structure for Highcharts Gantt chart
    const categories = ['Internal', 'Pipeline', 'Vessel', 'Railcar'];
    const series = categories.map(category => ({ name: category, data: [{ name: category, id: category }] }));

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
                    });
                }
            }
        }
    }
console.log(series)
    return {
        title: {
            text: 'Current Movements'
        },
        series,
        // yAxis: {
        //     type: 'category',
        //     categories
        // },
        xAxis: {
            currentDateIndicator: true
        },
    };
}
