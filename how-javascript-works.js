//    Hoisting : JavaScript shift the Creation phase before the Execution phase
/*    During Execution of program we have two phases:

1.  Creation Phase:
 ->contains declaration of all variables and functions

2.  Execution Phase:
->  contains Program Statements

Example: we write code like this

console.log(a)   // Execution phase-> undefined 
var a=10        //  Creation Phase
console.log(a) //   Execution phase-> 10

but javascript moved creation phase at the top of execution phase that's called hoisting.


//code send for Execution:
var a               // Creation Phase
console.log(a)     //  Execution phase=>a-> undefined
a=10              //   Execution phase
console.log(a)   //    Execution phase=>a-> 10


-> In ES6 i.e. ECMASCRIPT 2015, hoisting is avoided by let or const keywords.
-> by using let or const keyword instead of var we can avoid hoisting.

Example: we should write like this:

console.log(a)// ReferenceError: Cannot access 'a' before initialization
let a=10
console.log(a)
                   */


//use strict mode:
/*Example:

a=10            //global variable(wi-fi)-> take more space in memory
console.log(a) //a->10                                                */

// if we don't want that global variable take more space in memory so we use strict mode.
/*
"use strict"
a = 10
console.log(a) //ReferenceError: a is not defined    
*/


/*  Global Chain/Scope Chain:

  when JS search variable :
1. check local scope 
2. check outer scope
3. check global scope
-> this process is called global chain.
*/

/*  Lexical Scope:
->inner function can access variables of outer function
but outer function can't access variables of inner function 

 */

//Example:
/*
var a = 10
function outer() {
  var b = 20
  function inner() {
    var c = 30
    console.log(`In inner function a=${a} b=${b} c=${c}`)
  }
  inner()
  console.log(`In outer function a=${a} b=${b}`)

}
outer()
console.log(`In main scope a=${a}`)
*/


//  Closure:

/*  Closure is a function object that remembers values 
    in enclosing scope even if they are not in memory.
     closure works like a function
    */
//example:
/*
var cl=function test(){
        console.log("Hello World")    
    
}
cl()
cl()
cl()
cl()*/


/*
var a=10
function outer(){
  var b=20
  function inner(){
    var c=30
    console.log(`In inner function a=${a} b=${b} c=${c}`)
  }
  return inner
}
var cl=outer()
cl()*/



/*
Synchronous and Asynchronous Programming in js

Synchronous :
line by line execution
one task has to wait until previous task complete*/

//Example:
/*
function fun1() {
  console.log("In fun1 function")
}
function fun2() {
  console.log("In fun2 function")
}
function fun3() {
  console.log("In fun3 function")
}
function fun4() {
  console.log("In fun4 function")
}
function fun5() {
  console.log("In fun5 function")
}
fun1()
fun2()
fun3()
fun4()
fun5()*/



/*
Asynchronous :
one task doen not have to wait to complete prevoius task
the task which takes least time execute first and so on(i.e.non blocking IO model)

*/
//Example:
/*
function fun1() {
  setTimeout(() => {
    console.log("In fun1 function")

  }, 5000)
}
function fun2() {
  setTimeout(() => {

    console.log("In fun2 function")
  }, 3000)
}
function fun3() {
  setTimeout(() => {

    console.log("In fun3 function")
  }, 4000)
}

function fun4() {
  setTimeout(() => {

    console.log("In fun4 function")
  }, 2000)
}
function fun5() {
  setTimeout(() => {
    console.log("In fun5 function")
  }, 1000)
}

fun1()
fun2()
fun3()
fun4()
fun5()*/







