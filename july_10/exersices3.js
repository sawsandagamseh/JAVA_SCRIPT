// 1. Write a JS code to print numbers from 1 to 10
for(i=0; i<=100; i++)
{
  document.write(i+' ');
}
document.write('<br><br>')


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]
for(i=0;i<arr.length;i++){
    if( arr[i]%2==0)
    {document.write(arr[i]+" ")}
}

document.write('<br><br>');

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

for(i=1; i<=8; i++)
{
    for(x=1;x <= i;x++)
    {
        document.write(x + ' ')
    }
    document.write('<br>');
}
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
let x = "don’t know why";

if(x.includes('y')){
    document.write('yes');
}else{
    document.write('no');
}


document.write('<br><br>')