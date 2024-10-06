// load google chart
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawVoteChart);

// initial votes value and get votes from localStorage
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
// draw vote chart
function drawVoteChart() {
    // change votes object to array
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

// submit vote
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitVote').addEventListener('click', function () {
        const selectedWine = document.querySelector('input[name="wine"]:checked').value;
        votes[selectedWine]++;
        
        // save votes to localStorage
        localStorage.setItem('cocktailVotes', JSON.stringify(votes));
        
        // update vote chart
        drawVoteChart();
    });

});
