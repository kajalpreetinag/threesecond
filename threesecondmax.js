const input =require("readline-sync");
let a = input.questionInt("enter first number: ");
let b = input.questionInt("enter second number: ");
let c = input.questionInt("enter third number: ");

if(a>b){l=a; s=b;}else{l=b;s=a;}
if(l>c){l1=l; s1=c;}else{l1=c; s1=l;}
if(s>s1){l2=s; s2=s1;}else{l2=s1; s2=s;}
console.log("l2 is second greater",l2)