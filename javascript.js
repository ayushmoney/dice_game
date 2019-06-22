var n=Math.random();
n=Math.floor(n*6)+1;
var m=Math.random();
m=Math.floor(m*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+n+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+m+".png");
if(n>m)
document.querySelector("h1").innerHTML="Player 1 wins";
else if (n==m)
document.querySelector("h1").innerHTML="DRAW";
else
document.querySelector("h1").innerHTML="Player 2 wins";