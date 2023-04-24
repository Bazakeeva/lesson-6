let buttonCountPlus = document. getElementById("buttonCountPlus");
let buttonCountMinus = document. getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let number = 0;


buttonCountPlus.onclick = function () {
 if (number <= 0){
     number++;
     count.innerHTML = number;
 }
};
buttonCountMinus.onclick = function () {
 if (number >= 0){
     number--;
     count.innerHTML = number;
 }
};