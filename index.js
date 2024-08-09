
let username;

        document.getElementById('mysubmit').onclick = function(){
            username = document.getElementById("textbox").value;
            console.log(username);
            document.getElementById("myh1").textContent = username;
        }
let radius;
let circle;
const PI = 3.14;
        document.getElementById("submit").onclick = function(){
            radius = document.getElementById("input").value;
            radius=Number(radius)
            circle = 2*PI*radius;
            document.getElementById("myh4").textContent = circle;
            
        }

        document.addEventListener("DOMContentLoaded", function() {
        const dec = document.getElementById("dec");
        const reset= document.getElementById("reset");
        const increase = document.getElementById("increase");
        const count1 = document.getElementById("count1");
        let count = 0;
        
        dec.onclick = function() {
            count--;
            count1.textcontent = count;
        }
        
        increase.onclick = function() {
            count++;
            count1.textcontent = count;
        }
        
        reset.onclick = function() {
            count = 0;
            count1.textcontent = count;
        }
    });