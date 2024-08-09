const mybutton = document.getElementById("mybutton");
const mytext = document.getElementById("mytext");
let min =1;
let max = 6;
let randomnum ;
mybutton.onclick = function (){
    randomnum = Math.floor(Math.random()*max)+min;
    mytext.textContent = randomnum;
}