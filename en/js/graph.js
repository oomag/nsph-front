//первый график

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

//второй график

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

//пончик

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

//Карта

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

var map = L.map('mapid', {
    center: [31.73, 0],
    zoom: 1,
    layers: grayscale
});

var dotIcon = L.icon({
    iconUrl: '/en/img/marker.png',
    iconSize: [10, 10]
});

L.marker([51.5, -0.09], {icon: dotIcon}).addTo(map);

//tooltips

$(function () {
    let triggers = $('.tooltip');
    triggers.on('click', function (e) {
        e.preventDefault();
        let trigger = $(e.currentTarget);
        if(!trigger.hasClass('tooltip--active')) {
            triggers.removeClass('tooltip--active')
            trigger.addClass('tooltip--active')
        } else {
            trigger.removeClass('tooltip--active');
        }
    })
    $(document).mouseup(function (e) {
        var div = $('.tooltip');
        if (!div.is(e.target)
                && div.has(e.target).length === 0) {
            div.removeClass('tooltip--active');
        }
    });
})

