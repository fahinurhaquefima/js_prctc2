1.//----------positive or nagetive (if,else-if,else statement)---------------

// let i=26;
// if(i>0){
//     console.log("positive Number");
// }
// else if(i<0){
//     console.log("negetive Number");
// }
// else{
//     console.log("Zero");
// }

2.// ----------Even or Odd (if,else statement)----------
// let a=10;
// if(a%2==0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

// -------------Ternary Operator diye even or odd--------------

// let number=450;
// number%2==0 ?console.log("even number"):console.log("odd number");

3.// ------------Find max between 2 numbers----------------

// let a=160
// let b=160;
// if(a>b){
//     console.log(a,"A is Max Number");
// }
// else if(a<b){
//     console.log(b,"B is Max Number");
// }
// else{
//     console.log("equal");
// }

// OR,,,,,,,,,,,
// let a=90
// let b=140
// if(a>b){
//     console.log(a,"A is Max Number");
// }
// else if(a<b){
//     console.log(b,"B is Max Number");
// }
// else{
//     console.log("equal");
// }

4.//-------------Find max among 3 numbers--------------

// let x=8
// let y=100
// let z=39
// if(x>y && x>z){
//     console.log(a,"X is Big Number");
// }
// else if(y>x && y>z){
//     console.log(y,"Y is Big Number");
// }
// else{
//     console.log(z,"Z is Big Number");
// }

// -------------Find max among 3 numbers (Nested Ternary Operator)-----------

// let a=40
// let b=30
// let c=92;
// (a>b && a>c) ? console.log(a,"A is large number") : (b>c && b>a) ? console.log(b,"B is large number") : console.log(c,"C is large number");

5.// --------------Vowel or Consonant (switch statement)------------

// let letter  = prompt("Enter your latter:");
// letter = letter.toLowerCase();
// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//     console.log("vowel");
// }
// else{
//     console.log("consonent");
// }

5.// --------------Vowel or Consonant (switch statement)------------

// let letter="e";
// letter = letter.tolowercase();
// switch (letter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonent");
// }

6.// input week number and console total day
// let week=7;
// console.log(week*12,"days");

7.// input month number and console number of days in that month
// let year=2000
// let month =9
// let feb=(year%4==0 && year%100==!0) || (year%400==0)?29:28
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     console.log(31);
// }
// else if(month==4 || month==6 || month==9 || month==11){
//     console.log(30);
// }
// else if(month==2){
//     console.log(feb);
// }
// else{
//     console.log("not a month");
// }


9.// --------------Result Sheet------------

// let marks=99;

// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=70){
//     console.log("A");
// }
// else if(marks>=60){
//     console.log("A-");
// }
// else if(marks>=50){
//     console.log("B");
// }
// else if(marks>=40){
//     console.log("C");
// }
// else if(marks>=33){
//     console.log("D");
// }
// else {
//     console.log("F");
// }

//or,,,,,,,,--------Result Sheet (logical  operator use kore-------

// let marks= prompt("Enter your marks :");
// if (marks>100 || marks<0){
//     console.log("Invalid result");
// }
// else if(marks>=80 && marks<=100){
//     console.log("A+");
// }
// else if(marks>=70 && marks<=79){
//     console.log("A");
// }
// else if(marks>=60 && marks<=69){
//     console.log("A-");
// }
// else if(marks>=50 && marks<=59){
//     console.log("B");
// }
// else if(marks>=40 && marks<=49){
//     console.log("C");
// }
// else if(marks>=33 && marks<=39){
//     console.log("D");
// }
// else {
//     console.log("F");
// }

//----------digit spelling (switch statement)----------
// let digit = prompt("Enter any digit");
// switch(digit){
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("one");
//         break;
//     case "2":
//         console.log("two");
//         break;
//     case "3":
//         console.log("three");
//         break;
//     case "4":
//         console.log("four");
//         break;
//     case "5":
//         console.log("five");
//         break;
//     case "6":
//         console.log("six");
//         break;
//     case "7":
//         console.log("seven");
//         break;
//     case "8":
//         console.loge("eight");
//         break;
//     case "9":
//         console.log("nine");
//         default:
//             console.log("Not a digit");
//}

//----------positive or nagetive (ternari operator)---------------
// let number =5;
// number > 0 ? console.log("positive") : console.log("negetive");

// // or,,,,,,,
// let num= 0;
// num > 0 ? console.log("positive") : num<0 ? console.log("Negetive") : console.log("Zero"); 