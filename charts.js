// Kapitał AI - wykresy


let expenseChart = null;




function updateChart(){


let canvas =
document.getElementById("expenseChart");



if(!canvas){

return;

}




let categories = {};



expenses.forEach(e=>{


let amount = Number(e.amount);



if(!categories[e.category]){

categories[e.category]=0;

}



categories[e.category]+=amount;



});




let labels =
Object.keys(categories);



let values =
Object.values(categories);




if(expenseChart){

expenseChart.destroy();

}





if(labels.length===0){

return;

}




expenseChart = new Chart(canvas, {


type:"doughnut",


data:{


labels:labels,


datasets:[{

data:values

}]


},



options:{


responsive:true,


plugins:{


legend:{


position:"bottom",

labels:{


color:"white"


}


}


}


}



});



}
