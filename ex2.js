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