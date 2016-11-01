function LuckyNumber(){
var lucky = 1;
for(i=0;i<5;i++){
            lucky += Math.floor(Math.random() * (999 - 1) + 1);
            //Math.random = between 0-1, formula = * (max - min) + min, floor makes number a whole number
          }
         document.getElementById("luckyOutput").innerHTML="Your lucky number is " + lucky;
}