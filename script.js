console.log('my first code');
// variable
a=5;//without declaration
var a=5;
console.log(a);
let b=56;
const n=67;
{
   const n=90;
    console.log(n);
    var a=34;
    console.log(a);              //block 2
    let b=90;
    console.log(b);
}
var a=67;
console.log(a);
console.log(b);
var firstname='Biji';
console.log(typeof(firstname));
let bool=true;
console.log(typeof(bool));
var g;
console.log(g);
// Arrays
var arr1=['Pine','acasia','teak',10];
arr1.push('Rosewood');
arr1.pop();
console.log(arr1);
// objects 
// let person={fname:'Maya',age:80,Location:'TVM'}
// console.log(person);
// OR


// let person=new Object();
// person.fname='Miya';
// person.age=80;
// console.log(person);

let car={cname:'swift',colour:'white',model:2023}
console.log(car);

// Functions 26/07/2024
function display(fname){
console.log('welcome '+fname+' to function');
}
display("Biji");//Function call
//Function to add 2 numbers
function add_val(a,b)
{
    var sum=a+b;
    // console.log(sum);
    return sum;
}
// add_val(10,20);
 var result=add_val(10,20);
 console.log('the sum is '+result);
//  multiplication
 function mul_val(c,d)
{
    var mul=c*d;
    console.log(mul);
}
mul_val(40,20);
var ab=7;
var abc=ab++;//post increment
console.log(ab);
console.log(abc);

var ab=7;
var abc=++ab;//post increment
console.log(ab);
console.log(abc);
var exp=(4*7)-8**2+9;
console.log(exp);
var tt=56;
var tm='56';
// Conditional statements
if (tm>tt&& tm===tt){
// if (exp>0) {
console.log('Value is grater or equal');
    // console.log('Value is grater than zero');
} 
// else if(tm==tt){
// else if(exp===0){
// console.log('Value equal to zero');

    // console.log('Value equal');
// }
else {
    console.log('value is less');
    // console.log('value is less than zero');

}
var result1=exp>-30? 'value is grater than zero':'value is less than zero';
console.log(result1);
    
// looping statement
// print number 1 to 10
for(let i=1;i<=10;i++)
{
    console.log(i+1);
}
var array=[1,45,34,56,78];
for (let i=0;i<array.length;i++) {
    console.log(array[i]);
  }
  var obj={fname:'Heera',age:34,place:'tvm'}
//   for in loop
for(const i in obj)
{
    console.log(obj[i]);
}
// for loop
for(const i of array)
{
    console.log(i);
}
// while loop
let i=0;
while(i<=10)
    {
        console.log(i);
        i++;
    }

    // Do...while loop
    let r=1;
    do
    {
        console.log(r);
        r++;
    }while(r<=10)
    

