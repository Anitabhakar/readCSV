/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    function getCsv() {
    $.ajax({
        
        type: "GET",
        url: "data1.csv",
        dataType: "text",
        success: function(data) {
            alert(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("Status: " + xhr.status + "     Error: " + thrownError);
        }
    });
    console.log('anita');
};

$("#upload").click(function() {
    var fname = $("data1.csv").val();
    fname = fname.replace(/\\/g, "/");
    fname = "file:data1.csv" + fname;
    getCsv(fname);
});
});


