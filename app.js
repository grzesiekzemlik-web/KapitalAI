// Kapitał AI - główna aplikacja

let money = loadMoney();
let expenses = loadExpenses();
let goal = loadGoal();


function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});


let selected = document.getElementById(page);

if(selected){
selected.classList.add("active");
}


refreshApp();


}



function refreshApp(){

updateDashboard();

showHistory();

updateAnalysis();

updateChart();

updateAI();

}





function updateDashboard(){


document.getElementById("money").innerHTML =
money + " zł";



let total = 0;


expenses.forEach(e=>{
total += Number(e.amount);
});



document.getElementById("summary").innerHTML =

"💸 Wszystkie wydatki: "+
total+
" zł";



let limit = 0;


if(money > 0){

limit = Math.floor((money*0.2)/30);

}


document.getElementById("dailyLimit").innerHTML =

"💳 Limit dzienny: "+
limit+
" zł";





if(goal && goal.value > 0){


let progress =
Math.floor((money / goal.value)*100);



if(progress > 100){
progress = 100;
}



document.getElementById("goalInfo").innerHTML =

goal.name+
"<br>"+
money+
" / "+
goal.value+
" zł<br>"+
progress+
"%";


}else{


document.getElementById("goalInfo").innerHTML =
"Brak celu";


}


}







function addExpense(){


let name =
document.getElementById("expenseName").value;


let amount =
Number(document.getElementById("expenseAmount").value);


let category =
document.getElementById("category").value;



if(!name || amount <= 0){

return;

}



expenses.push({

name:name,

amount:amount,

category:category,

date:new Date().toLocaleDateString()

});



money -= amount;



saveMoney(money);

saveExpenses(expenses);



document.getElementById("expenseName").value="";

document.getElementById("expenseAmount").value="";



refreshApp();


}







function showHistory(){


let box =
document.getElementById("history");



if(!box){
return;
}



if(expenses.length===0){

box.innerHTML="Brak wydatków";

return;

}



box.innerHTML = expenses.map(e=>`

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


let name =
document.getElementById("goalName").value;


let value =
Number(document.getElementById("goalValue").value);



if(!name || value<=0){

return;

}



goal={

name:name,

value:value

};



saveGoalData(goal);


refreshApp();


}







function updateAnalysis(){


let box =
document.getElementById("analysisText");



if(!box){
return;
}



let total=0;

let categories={};



expenses.forEach(e=>{


let amount = Number(e.amount);


total+=amount;



if(!categories[e.category]){

categories[e.category]=0;

}



categories[e.category]+=amount;



});




let biggest="Brak";

let max=0;



for(let c in categories){

if(categories[c]>max){

max=categories[c];

biggest=c;

}

}



if(expenses.length===0){


box.innerHTML="Brak danych";


return;


}



box.innerHTML=

"💸 Wydatki: "+
total+
" zł<br><br>"+

"🔥 Największa kategoria:<br>"+
biggest+
"<br>"+
max+
" zł";


}







window.onload=function(){

refreshApp();

}
