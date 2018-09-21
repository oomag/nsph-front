var ctx = document.getElementById("lineChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["10:50", "11:00", "11:10", "11:20", "11:30", "11:40",
        "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50"],
        datasets: [{
            data: [0, 120000, 110000, 109000, 110000, 140000, 7000, 7000, 7000, 25000, 100000, 130000, 120000],
            label: 'NZT',
            backgroundColor: '#fda700',
            borderColor: '#fda700',
            borderWidth: 4,
            fill: false
        }]
    },
    options: {
        legend: {
            position: 'top',
            padding: '500px'
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 150000,
                    stepSize: 50000,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["10:50", "11:00", "11:10", "11:20", "11:30", "11:40",
            "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50"],
        datasets: [{
            data: [0, 120000, 110000, 109000, 110000, 140000, 7000, 7000, 7000, 25000, 100000, 130000, 120000],
            label: 'NZT',
            backgroundColor: '#fda700',
            borderColor: '#fda700',
            borderWidth: 4,
            fill: false
        }]
    },
    options: {
        legend: {
            position: 'top',
            padding: '500px'
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 150000,
                    stepSize: 50000,
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById("donughtChart");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["User", "Validator"],
        datasets: [{
            backgroundColor: ['#fda700', '#54585a'],
            borderColor: ["#fda700", "#54585a"],
            data: [5000, 104],
        }]
    },
    options: {
        cutoutPercentage: 45,
        legend: {
            position: 'right',
        }
    }
});

var map = L.map('mapid', {
    center: [51.505, -0.09],
    zoom: 13
});
L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "/en/img/map.png";
    },
    getAttribution: function() {
        return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});

L.tileLayer.kitten = function() {
    return new L.TileLayer.Kitten();
}

L.tileLayer.kitten().addTo(map);
