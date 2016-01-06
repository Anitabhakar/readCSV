/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    d3.csv("data1.csv", function (data) {
//       color.domain(d3.keys[0].filter(function(key){
//        return key == "avg" || key == "additional_columns"; 
//        var numRows = data.length;
//        console.log(numRows);
        var headerNames = d3.keys(data[0]);
        var t = '<table class="table-bordered table"><tr>';
        $.each(headerNames, function (i, v) {
            console.log(i, v);
            t = t + '<th>' + v + '</th>';
        });
        t = t + '</tr>';
        $.each(data, function (index, value) {
            t = t + '<tr>';
            $.each(headerNames, function (i, v) {
                console.log(i, v);
                t = t + '<td>' + value[v] + '</td>';
            });
            t = t + '</tr>';
            
        });
        t = t + '</table>';
        $('#myTable').append(t);
    });

});

