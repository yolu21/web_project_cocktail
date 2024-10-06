google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(getChartData);

// Fetch JSON data and create both charts
function getChartData() {
    fetch('../chartData.json')  // JSON 文件名稱
        .then(response => response.json())
        .then(data => {
            drawChart('chart1_div', data.charts[0]);  // 第一個圖表
            drawChart('chart2_div', data.charts[1]); // 第二個圖表
            drawChart('chart3_div', data.charts[2]);
        })
        .catch(error => console.error('Error fetching JSON data:', error));
}

// 繪製圖表的函數，傳入不同的 div 和數據
function drawChart(divId, chartData) {
    var data = google.visualization.arrayToDataTable(chartData.data);

    var options = {
        title: chartData.title,
        chartArea: { width: '50%' },
        backgroundColor: 'Linen',
        colors: [chartData.color],
        hAxis: {
            title: chartData.hAxis.title ,
            minValue: 0
        },
        vAxis: {
            title: chartData.vAxis.title
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById(divId));
    chart.draw(data, options);
}