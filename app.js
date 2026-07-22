// Kapitał AI - główna logika


let money = loadMoney();

let expenses = loadExpenses();

let goal = loadGoal();





function showPage(page){


document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});


document.getElementById(page)
.classList.add("active");



if(page==="analysis"){

updateAnalysis();

showHistory();

}


if(page==="ai"){

updateAI();

}


}







function updateDashboard(){


document.getElementById("money").innerHTML =
money + " zł";



let total = 0;

let categories = {};



expenses.forEach(e=>{


total += e.amount;



if(!categories[e.category]){

categories[e.category]=0;

}


categories[e.category]+=e.amount;



});



document.getElementById("summary").innerHTML =

"💸 Wydatki: "+total+" zł";



let limit = Math.floor((money*0.2)/30);



document.getElementById("dailyLimit").innerHTML =

"💳 Limit dzienny: "+limit+" zł";





if(goal){


document.getElementById("goalInfo").innerHTML =

goal.name+
"<br>"+
money+
" / "+
goal.value+
" zł";


}else{


document.getElementById("goalInfo").innerHTML =
"Brak celu";


}

updateAI();

}



function addExpense(){


let name =
document.getElementById("expenseName").value;


let amount =
Number(document.getElementById("expenseAmount").value);


let category =
document.getElementById("category").value;



if(!name || !amount){

return;

}



expenses.push({

name:name,

amount:amount,

category:category,

date:new Date().toLocaleDateString()

});



money -= amount;



saveExpenses(expenses);

saveMoney(money);



updateDashboard();

showHistory();


document.getElementById("expenseName").value="";

document.getElementById("expenseAmount").value="";


}







function showHistory(){


let box=document.getElementById("history");


if(expenses.length===0){

box.innerHTML="Brak wydatków";

return;

}



box.innerHTML =
expenses.map(e=>`

<p>

<b>${e.name}</b><br>

${e.category}<br>

-${e.amount} zł<br>

${e.date}

</p>

<hr>

`).join("");



}







function saveGoal(){


goal={

name:
document.getElementById("goalName").value,


value:
Number(document.getElementById("goalValue").value)


};



saveGoalData(goal);



updateDashboard();


}








function updateAnalysis(){
console.log(expenses);

let total=0;

let categories={};


expenses.forEach(e=>{

total+=e.amount;


if(!categories[e.category]){

categories[e.category]=0;

}

categories[e.category]+=e.amount;

});


let biggest="Brak";

let max=0;


for(let c in categories){

if(categories[c]>max){

max=categories[c];

biggest=c;

}

}


let box = document.getElementById("analysisText");

if(box){

box.innerHTML =

"💸 Wydatki: "+total+" zł<br><br>"+
"🔥 Największa kategoria: "+
biggest+"<br>"+
max+" zł";

}







window.onload=function(){


updateDashboard();

showHistory();


}
