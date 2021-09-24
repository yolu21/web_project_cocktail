google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Main ingredients', 'Number of occurrences of ingredients', ],
        ['Vodka', 3],
        ['Grapefruit juice', 2],
        ['Lemon slices', 14],
        ['Lime juice', 8],
        ['Orange juice', 3],
        ['Gin', 5],
        ['Ounce rum', 2]
    ]);

    var options = {
        title: '20 popular cocktails main ingredients',
        chartArea: { width: '50%', lenth: '100%' },
        backgroundColor: 'Linen',
        colors: ['rgb(90,20,18)'],
        hAxis: {
            title: '',
            minValue: 0
        },
        vAxis: {
            title: 'Ingredients'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}