$(function(window, $){
    var socket = io();
    socket.on('newTemp', function(data) {
        console.log(data);
        var date = new Date();
        var $2ndFloor = $('.second-floor-temp');
        $2ndFloor.find('p').text(data.temperature + "C");
        $2ndFloor.find('p').next().text('Last reading on: ' + date);
        $('.chart-container').highcharts().series[0].addPoint([date, parseFloat(data.temperature)]);
    });
}(window, $));