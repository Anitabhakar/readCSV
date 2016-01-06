/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   //sort the colors array alphabetically and ascending:
		
		var colors = ["green", "red", "yellow", "orange", "blue"];
		
		var ascendingColors = colors.sort();
		
		//display each value
		
		document.write(ascendingColors);
		
		//This should print:
		
		//blue, green, orange, red, yellow
		
});

