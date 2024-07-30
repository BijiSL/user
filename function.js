function display(fname)
{
    console.log('Welocme '+fname+' to the function');

}
display('Biji');       //Call the function

// Functions to add 2 numbers

// function add_val(a,b)
// {
//     var sum=a+b;
//     console.log(sum);
// }
// add_val(10,20);
// OR

function add_val(a,b)
{
    var sum=a+b;
   return sum;
}
var result=add_val(10,20);
console.log('The sum is '+result);
// multiply 2 numbers
function multi(c,d)
{
    return c*d;
}
console.log('The multiple value ' +multi(6,3));
// subtract 2 numbers
function sub(e,f)
{
    return e-f;
}
console.log('The subtract value ' +sub(30,15));
// division of 2 numbers
function div(g,h)
{
    return g/h;
}
console.log('The division value ' +div(30,15));
// INCREMENT
function add_val(a,b)
{
    var sum=a+b;
   return sum;
}
var result=add_val(10,20);
console.log('The sum is '+result);
var ab=7;
//var abc=ab++;   //post increment
var abc=++ab; //pre increment
console.log(abc);
console.log(ab);
//BODMAS example 
var exp=(4*7)-8**2+9; 
console.log(exp);

// conditional statement

// if(exp>0)
// {
//     console.log('Value is greater than zero');
// }
// else if(exp==0)
// {
//     console.log('value is equal to zero');
// }
// else
// {
//     console.log('Value is less than zero'); 
// }

var tt=56;
var tm='56';
if(tt>tm)
    {
        console.log('Value is greater');
    }
    else if(tm==tt)   //Or else if(tm===tt) strict evaluation will find data value and data type
    {
        console.log('value is equal');
    }
    else
    {
        console.log('Value is less'); 
    }


// OR Operator
if(tt>tm || tt==tm)
    {
                console.log('Value is greater or equal');
            }
            else 
            {
                console.log('value is less');
}



