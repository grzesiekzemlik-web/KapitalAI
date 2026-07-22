// Kapitał AI - pamięć aplikacji


function loadMoney(){

return Number(localStorage.getItem("money")) || 0;

}



function saveMoney(value){

localStorage.setItem(
"money",
value
);

}





function loadExpenses(){

return JSON.parse(
localStorage.getItem("expenses")
) || [];

}



function saveExpenses(data){

localStorage.setItem(
"expenses",
JSON.stringify(data)
);

}





function loadGoal(){

return JSON.parse(
localStorage.getItem("goal")
) || null;

}



function saveGoalData(goal){

localStorage.setItem(
"goal",
JSON.stringify(goal)
);

}
