google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', 'Number of occurrences of ingredients', ],
        ['soda water', 2],
        ['ice', 9],
        ['Whiskey', 2],
        ['White rum', 1],
        ['Cassis liqueur', 1],
        ['Blue Citrus Sweet Wine', 1],
        ['Total', 14]
        //['Orange wine', 2]
    ]);

    var options = {
        title: '',
        chartArea: { width: '50%', lenth: '100%' },
        backgroundColor: 'Linen',
        colors: ['rgb(125, 62, 62)'],
        hAxis: {
            title: '',
            minValue: 0
        },
        vAxis: {
            title: ''
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart1_div'));

    chart.draw(data, options);
}