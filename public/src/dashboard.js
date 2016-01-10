/**
 * Created by Christian on 1/10/16.
 */
$(function(window, $){
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
                type: 'datetime'
            },
            series: [
                {
                    name: '2nd Floor',
                    data: [
                        [Date.UTC(1970, 9, 21), 0],
                        [Date.UTC(1970, 10, 4), 0.28],
                        [Date.UTC(1970, 10, 9), 0.25],
                        [Date.UTC(1970, 10, 27), 0.2],
                        [Date.UTC(1970, 11, 2), 0.28],
                        [Date.UTC(1970, 11, 26), 0.28],
                        [Date.UTC(1970, 11, 29), 0.47],
                        [Date.UTC(1971, 0, 11), 0.79],
                        [Date.UTC(1971, 0, 26), 0.72],
                        [Date.UTC(1971, 1, 3), 1.02],
                        [Date.UTC(1971, 1, 11), 1.12],
                        [Date.UTC(1971, 1, 25), 1.2],
                        [Date.UTC(1971, 2, 11), 1.18],
                        [Date.UTC(1971, 3, 11), 1.19],
                        [Date.UTC(1971, 4, 1), 1.85],
                        [Date.UTC(1971, 4, 5), 2.22],
                        [Date.UTC(1971, 4, 19), 1.15],
                        [Date.UTC(1971, 5, 3), 0]
                    ]
                },
                {
                    name: 'Outside',
                    data: [
                        [Date.UTC(1970, 9, 21), 0],
                        [Date.UTC(1970, 10, 4), 0.1],
                        [Date.UTC(1970, 10, 9), 0.15],
                        [Date.UTC(1970, 10, 27), 0.25],
                        [Date.UTC(1970, 11, 2), 0.29],
                        [Date.UTC(1970, 11, 26), 0.8],
                        [Date.UTC(1970, 11, 29), 0.27],
                        [Date.UTC(1971, 0, 11), 0.39],
                        [Date.UTC(1971, 0, 26), 0.32],
                        [Date.UTC(1971, 1, 3), 0.02],
                        [Date.UTC(1971, 1, 11), 0.22],
                        [Date.UTC(1971, 1, 25), 1.0],
                        [Date.UTC(1971, 2, 11), 0.18],
                        [Date.UTC(1971, 3, 11), 0.25],
                        [Date.UTC(1971, 4, 1), 0.65],
                        [Date.UTC(1971, 4, 5), 1.02],
                        [Date.UTC(1971, 4, 19), 1.01],
                        [Date.UTC(1971, 5, 3), 0]
                    ]
                }
            ]
        });
    });
}(window, $));
