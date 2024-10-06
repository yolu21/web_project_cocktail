// 加載 Google Charts
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawVoteChart);

// 初始化票數 (使用 LocalStorage 存儲)
const votes = JSON.parse(localStorage.getItem('cocktailVotes')) || {
    "Salty Dog": 0,
    "Vodka Lime": 0,
    "Screwdriver": 0,
    "Orange Blossom": 0,
    "Gin Tonic": 0,
    "Bourbon Coke": 0,
    "Mojito": 0,
    "Godfather": 0,
    "Long Island Iced Tea": 0
};
// 繪製圖表
function drawVoteChart() {
    // 將票數轉換成 Google Charts 所需的數據格式
    const dataArr = [['Cocktail', 'Votes']];
    for (const wine in votes) {
        dataArr.push([wine, votes[wine]]);
    }
    const data = google.visualization.arrayToDataTable(dataArr);

    const options = {
        title: '調酒投票結果',
        chartArea: { width: '50%' },
        hAxis: {
            title: '票數',
            minValue: 0
        },
        vAxis: {
            title: '調酒種類',
            textStyle: { fontSize: 12 } 

        },
        colors: ["rgb(125, 62, 62)"],
        backgroundColor: 'Linen'
    };

    const chart = new google.visualization.BarChart(document.getElementById('vote-div'));
    chart.draw(data, options);
}

// 提交投票邏輯
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitVote').addEventListener('click', function () {
        const selectedWine = document.querySelector('input[name="wine"]:checked').value;
        votes[selectedWine]++;
        
        // 將票數保存到 LocalStorage
        localStorage.setItem('cocktailVotes', JSON.stringify(votes));
        
        // 更新圖表
        drawChart();
    });

});
