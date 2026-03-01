/*
JavaScript 1995

ECMA Script:
ES2 :1997
ES3 :1998
ES4 :1999
ES4 :2003(REVISED version of ES4)
ES5 :2009
------------------------------------------

ES6 :2015
ECMA Script 2016
ECMA Script 2017
ECMA Script 2018
ECMA Script 2019
ECMA Script 2020
ECMA Script 2021
ECMA Script 2022
ECMA Script 2023
ECMA Script 2024
ECMA Script 2025(current)
ECMA Script 2026(till end of the year)documentation:june/july

*/


/*
ES6 New Features:
1.let
2.const
3.Arrow Function
4.MAP
5.SET
6.FOR OF
7.classes
8.Promises
9.Default Parameters
10.String include()
11.String.startsWith() 
12.String.endsWith() 
13.Array and Object Destructuring
14.reast and spread operator
15.Template Literals String
`a=${a}`
16.Generators
17.Async/await
18.Array.from()
19.Array.keys(),Array.values(),Array.enteries()
20.Array.find()
21.Array.findIndex()
22.New Math Methods
23.Number properties
24.New Number Methods
25.New global Methods
26.Iterables Object.entries
27.JavaScript Modules
28.use srtict
*/


/*function test(a, b, c) {
    console.log(`a=${a} b=${b} c=${c}`)
}
test(10, 20, 30)
test(10, 20, 30, 40)//rest values wasted
test(10, 20, 30, 40, 50)//rest values wasted
test(10, 20, 30, 40, 50, 60)//rest values wasted
test(10, 20, 30, 40, 50, 60, 70)//rest values wasted*/


//Note: if we don't want to waste these values we use rest operator


/*  rest operator:
allows a function to accept infinite number of arguments as an array */

/*
function test(a,b,c,...x){         //   x(variable)->array,   ...->eclipse symbol
    console.log(`a=${a} b=${b} c=${c} Extras=${x}`)
}
test(10,20,30)
test(10,20,30,40)
test(10,20,30,40,50)
test(10,20,30,40,50,60)
test(10,20,30,40,50,60,70)       */

/*function test(a,b,c,d,e)
{
console.log(`a=${a} b=${b} c=${c} d=${d} e=${e}`)
}

var arr=[10,20,30,40,50,60,70,80,90,100]
test(arr)*/

// Note: arr assigned to a and rest of the parameters will be undefined
//  if we don't want like  this we use spread opearator



/*  spread operator  */

/*
function test(a,b,c,d,e,...x)
{
console.log(`a=${a} b=${b} c=${c} d=${d} e=${e} Extras=${x}`)
}

var arr=[10,20,30,40,50,60,70,80,90,100]
test(...arr)
*/


//Shallow copy && Deep copy
/*
var a=[10,20,30,40,50]
var b=a         //shallow copy
var b=[...a]    //deep copy
console.log(a,b)
b[0]=100
b[1]=200
b[2]=300
b[3]=400
console.log(a,b)*/

/*
obj1 = {
    a: 10,
    b: 20,
    c: 30
}
obj2 = obj1//shallow copy
obj2 = { ...obj1 }//deep copy
console.log(obj1, obj2)
obj2.a = 100
obj2.b = 200
obj2.c = 300
console.log(obj1, obj2)*/
/*
function test() {
    console.log("Hello World1")
    return 1                        // after return no code can executed
    console.log("Hello World2")
    return 2
    console.log("Hello World3")
    return 3
    console.log("Hello World4")
    return 4
}*/



// Note: but if we want to executed all code step by step then we use Generators


/*Generators    :  
->  In ECMA Script 2015, generators were introduced in js
->  A generator is a process that can be paused and resumed and can yield multiple values  
->  consists a generator function , which return an iterable Generator object*/
/*

function* test() {
    console.log("Hello World1")
    yield 1
    console.log("Hello World2")
    yield 2
    console.log("Hello World3")
    yield 3
    console.log("Hello World4")
    yield 4
}
for(let i of test()){
console.log(i)
}
*/

/*
New Math Methods:
ES6 added the following methods to the math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()*/
/*
console.log(Math.cbrt(125))
console.log(Math.log2(4))
console.log(Math.log10(100))
console.log(Math.sign(-100))
console.log(Math.trunc(100/6))    */

/*
New Number Properties:
ES6 added the following proerties to the object:
EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER */
/*
console.log(Number.EPSILON)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER+1)
console.log(Number.MAX_SAFE_INTEGER+2)
console.log(Number.MAX_SAFE_INTEGER+3)
console.log(Number.MAX_SAFE_INTEGER+4)*/


/*
New Number Methods:
ES6 added 2 new methods to the number object:
Number.isInteger()
Number.isSafeInteger()*/
/*
console.log(Number.isInteger(25**0.5))
console.log(Number.isInteger(50**0.5))
console.log(Number.isSafeInteger(90**9))*/

/*
New Global Methods:
ES6 added 2 new global number methods:
isFinite()
isNaN()
*/
/*
console.log(isFinite(10/5))
console.log(isFinite(10/0))
console.log(isNaN(10*"hello"))
console.log(isNaN(10*"5"))*/











