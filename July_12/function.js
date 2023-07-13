/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(p1,p2,p3,p4){
  document.write(`You will be a ${p1} in ${p2}, and married to ${p3} with ${p4} kids.`)


}
tellFortune('full stack developer', 'jordan','mohammed', 3)
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
document.write('<br>');

function calculateDogAge(age){
  dog_age=age*7;
  document.write(`your dog age is ${dog_age} in dog years`);

}
  

calculateDogAge(4);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
document.write('<br>')
function calculateSupply(age,cup)
{your_still_days= (100-age)*365;
you_cup_need = your_still_days*cup;
document.write(`You will need ${you_cup_need} cups of tea to last you until the ripe old age of 100`)}

calculateSupply(27,4);
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
document.write('<br>')
function greet(name)
{return 'hello ' + name;
}

document.write(greet('sawsan'));
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
------x undecleard-----

function double(7) {
  return 2 * 7;
}
---ther is no parametr-----

function double('7') {
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x) {
  return 2 * x ;
}

functiondouble2(x)
return 2 * x;
}

functiodouble3(x) {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
document.write('<br>')
function cube(num)
{ return num**3;
}
document.write(cube(4));
document.write('<br>')
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(p1,p2){
  return p1*p2;
}
document.write(multiply(3,4));
document.write('<br>')
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
 let result;
  if(age>=20)
 {result= "yes you can";}
 else{
  let y = 20-age;
  result=`please come back after ${y} years to get one`
 }

 

return result;

}

document.write(canIGetADrivingLicense(8));
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/


function sameLength(str1,str2)
{ let bool;
  if(str1.lenghth == str2.length)
  {bool= true;}else{
    bool= false;
  }
  return bool;
}
document.write(sameLength('hhhh','sawsan'))
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1,num2){
  if(num1>num2)
  return num1;
  else return num2;
}

document.write(largerNubmer(7,8));
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(p1,p2,p3){
if(p1<p2 && p1<p3)
return p1;
else if(p2<p3 && p2<p1)
return p2;
else
return p3;

}
document.write(smallerNubmer(1,2,5))
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
document.write('<br>')
function shorterString(...st)
{
  let shortst=st[0];
  for(let i=0; i< st.length;i++)
  
    if(st[i].length <shortst.length)
    shortst=st[i]
  
   

  return shortst;

}
document.write(shorterString("air","by","car","school","github")+'<br>')
document.write(shorterString("air","tr","car","github","by")+'<br>')
document.write(shorterString("air","tr","by","car","github")+'<br>')

document.write('<br>')
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/document.write('<br>')
function longerString(...array_string)
{
  let longstr=array_string[0];
  for(let sh=1; sh<array_string.length;sh++){
    if(array_string[sh].length > longstr.length)
    longstr=array_string[sh];

    
  }
 return longstr;
}
document.write(longerString('str','sawsan','d','f','gff'))
document.write('<br>')
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(p1){

if(p1%2==0)
return true;
else
return false;
}
document.write(isEven(8))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(p1){

  if(p1%2==0)
  return false;
  else
  return true;
  }
  document.write(isOdd(8))
document.write('<br>')
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(p1) {
  return Math.abs(p1);
  
}

document.write(positive(-4))
document.write('<br>')
/*
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName)
{
  return firstName + ' ' + lastName;
}
document.write(fullName('sawsan','dagamseh'))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
document.write('<br>')
function average(p1,p2,p3,p4,p5)
{
  average=(p1+p2+p3+p4+p5)/5;
  return average;
}
document.write(average(3,4,6,7,8))
document.write('<br>')
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
return Math.floor(Math.random() * 1);
}
document.write(randomNumber())
document.write('<br>')
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(p1,p2){
  return Math.floor(Math.random() * p2) + p1;


}
document.write(randomBetweenNumbers(2,80))
document.write('<br>')
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
  if(score<=49)
  return 'F';
  else if(score<=69)
  return 'D' ;
  else if(score<=84)
  return 'C' ;
  else if(score<=94)
  return 'B' ;
  else if(score<=100)
  return 'A' ;
}

document.write(scoreInUniversty(94))
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=0
function counter()
{

  count+=1
  return count ;
}
document.write(counter());
document.write(counter());
document.write(counter());
document.write(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
document.write('<br>')
function restcounter(){
document.write(`${count} and the couter is reset now`)
count=1;

}


document.write(restcounter())
