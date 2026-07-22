// Kapitał AI - Doradca AI


function updateAI(){

let money = window.money;

let expenses = window.expenses;

let goal = window.goal;


let total = 0;

let categories = {};



expenses.forEach(e=>{


total += e.amount;


if(!categories[e.category]){

categories[e.category]=0;

}


categories[e.category]+=e.amount;


});



let biggest="brak";

let max=0;



for(let c in categories){


if(categories[c]>max){

max=categories[c];

biggest=c;

}


}




let advice="";




if(expenses.length===0){


advice =
"👋 Dodaj swoje pierwsze wydatki. AI zacznie analizować Twoje nawyki.";



}

else if(max > total*0.5){


advice =
"⚠️ Największy problem to kategoria: "
+biggest+
". Ponad połowa Twoich wydatków idzie właśnie tam.";



}

else if(goal){


let progress =
Math.floor((money/goal.value)*100);



advice =
"🎯 Twój cel "
+goal.name+
" jest wykonany w "
+progress+
"%. Kontynuuj odkładanie.";



}

else{


advice =
"✅ Twoje wydatki wyglądają stabilnie. Dobry moment na ustawienie celu oszczędnościowego.";


}




document.getElementById("aiAdvice").innerHTML =
advice;



document.getElementById("aiFull").innerHTML =
advice;



}
