/**
 * Created by Christian on 1/10/16.
 */
var helpers = (function(){
    return {
        prepareSeries: function(data, key1, key2) {
            return series = data.map(function(item ,i) {
                return [
                    new Date(item[key2]),
                    parseFloat(item[key1])
                ]
            });

            //return series.sort(function(a, b) {
            //   return a[1] - b[1];
            //});
        }
    }
}());