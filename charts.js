// Kapitał AI - wykresy


let chart;



function updateChart(){


let canvas =
document.getElementById("expenseChart");



if(!canvas){

return;

}



let categories = {};



expenses.forEach(e=>{


if(!categories[e.category]){

categories[e.category]=0;

}


categories[e.category]+=e.amount;


});



let labels =
Object.keys(categories);



let values =
Object.values(categories);



if(chart){

chart.destroy();

}



chart = new Chart(canvas, {


type:"doughnut",


data:{


labels:labels,


datasets:[{

data:values

}]


},


options:{


responsive:true


}



});



}
