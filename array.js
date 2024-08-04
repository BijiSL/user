// 1 exercise
var array=[72,13,22,21,56];
console.log(array);
console.log(array[0]); 
for(let i=1; i<array[0]; i++)
{
if (array[0]%i == 0)
{
    var j;
j++;
}
}
if(j==2)
{
console.log("the value is prime");
}
else
{
console.log("the value is not a prime");
}
array[0];
//  2 exercise
var arr1 = ['b',7,'b',6,'b','b',2,'b',4,'b','b'];
var a = 1;
var b = 0;
var c;
for (var i = 0; i < arr1.length; i++)
{
for (var j = i; j < arr1.length; j++)
{
if (arr1[i] == arr1[j])
b++;
if (a < b) {
a=b;
c= arr1[i];
}
}
b = 0;
}
console.log(c + " is more frequent ( " + a + " times ) ");

// 3 Exercise
var k=[]
for (let k = 0; k <=15; k++) 
{
if (k % 2 === 0)
{
console.log(k + " is even");
} 
else
{ 
console.log(k + " is odd");
}
}


// 4 Exercise

function squar(arr2) {
return arr2.reduce((sum, i) => sum + i * i, 0);
}
const arr2 = [2,4,5,8,9,10];
const result = squar(arr2);
console.log("Sum of squares:", result);