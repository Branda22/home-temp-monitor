/**
 * Created by Christian on 1/10/16.
 */
$(function(window, $){

    $outside = $('.outside-temp');
    $chart1 = $('.chart-container');
    $chart2 = $('.chart-container-2');


    var url = "https://api.forecast.io/forecast/c3a3fd9ff901c07207229f0b0657e78c/87.8975, 41.7686";
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(response) {
            console.log(response);
            setOutsideTemp(response.currently.temperature);
            var series = helpers.prepareSeries(response.hourly.data, 'temperature', 'time');
            $chart2.highcharts().series[0].setData(series);
        },
        error: function(xhr, status) {
            console.log("error");
        }
    });

    $.ajax({
        url: 'http://dry-brook-1370.herokuapp.com/login/temperature',
        type: 'GET',
        success: function(response) {
            var data = response.response;
            var series = helpers.prepareSeries(data, 'temperature', 'time');
            console.log(series);
            $chart1.highcharts().series[0].setData(series);
        },
        error: function(xhr, status) {
            console.log(error);
        }
    });


    var setOutsideTemp = function(temperature) {
        $outside.find('p').text(temperature + "°C");
    };

    $('.dashboard').ready(function(e) {
        $('.chart-container').highcharts({
            title: {
                text: 'Temperature History'
            },
            yAxis: {
              title: {
                  text: 'Temperature (°C)'
              }
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    minute: '%H:%M'
                }
            },
            series: [
                {
                    name: '2nd Floor',
                    data: []
                }
            ]
        });
        $('.chart-container-2').highcharts({
            title: {
                text: 'Temperature History'
            },
            yAxis: {
                title: {
                    text: 'Outside Temperature (°C)'
                }
            },
            xAxis: {
                type: 'datetime'
            },
            series: [
                {
                    name: 'Outside',
                    data: []
                }
            ]
        });
    });
}(window, $));
