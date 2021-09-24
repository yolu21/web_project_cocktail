google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['', 'Number of occurrences of ingredients', ],
        ['Berry Gin', 2],
        ['syrup', 4],
        ['Tongning Water', 1],
        ['White rum', 2],
        ['Coke', 3],
        ['Total', 14]
    ]);

    var options = {
        title: '',
        chartArea: { width: '50%', lenth: '100%' },
        backgroundColor: 'Linen',
        colors: ['rgb(200, 110, 110)'],
        hAxis: {
            title: 'Total Times of the use of ongredients',
            minValue: 0
        },
        vAxis: {
            title: ''
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

    chart.draw(data, options);
}