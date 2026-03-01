/*  Event Propagation Mode:
->  determine in which order elements receive the event

1.  Event Capturing :  from  first parent to last child

2.  Event Bubbling (Default) : from last child to first parent

 */


/*Function Curring:
   it is a technique of evaluating function with multiple arguments
   into sequenceof function with multiple arguments

*/

/*var sum=function sum(num1){
return function sum(num2){
return function sum(num3){
return function sum(num4){
  return num1+num2+num3+num4
  }
  }
  }
  }
}*/

/*
var sum=(num1)=>(num2)=>(num3)=>(num4)=>num1+num2+num3+num4
console.log(sum(100)(200)(300)(400))*/



// higher order function: the function which takes another fun as an argument.
// callback function:the function which is passed  as an argument into another function 
/*

function test(fun){
  console.log("In high order function test")
fun()
fun()
fun()
  console.log("back to high order function test")
}
function sample(){
  console.log("In callback function test")
}
test(sample) 

*/

/*
 here find() findLast() findIndex() findLastIndex() map() and filter()
 function are higher order function and check function is a callback function
 */
var a = [11, 12, 13, 15, 16, 17, 18, 20, 25, 30]//([item])
function check(item) {
  return item % 5 == 0
}
/*
function myFind(arr,fun){
  for(var i=0;i<arr.length;i++){
    if(fun(arr[i]))
      return arr[i]
  }
  return undefined
}
function myFindLast(arr,fun){

for(var i=arr.length-1;i>=0;i--){
  if(fun(arr[i]))
    return arr[i]
  
}
return undefined
}
function myFindIndex(arr,fun){
  for(var i=0;i<arr.length;i++){
    if(fun(arr[i]))
      return i
  }
  return -1
}
function myFindLastIndex(arr,fun){

for(var i=arr.length-1;i>=0;i--){
  if(fun(arr[i]))
    return i
  
}
return -1
}*/

function myMap(arr,fun){
  let output=[]
  for(let item of arr){
    output.push(fun(item))
  }
  return output
}

function myFilter(arr,fun){
  let output=[]
  for(let item of arr){
    if(fun(item))
    output.push(item)
  }
  return output
}


/*
console.log(a.find(check))//return only one value
console.log(myFind(a,check))
console.log(a.findLast(check))
console.log(myFindLast(a,check))
console.log(a.findIndex(check))
console.log(myFindIndex(a,check))
console.log(a.findLastIndex(check))
console.log(myFindLastIndex(a,check))*/
console.log(a.map(check))//return boolean values
console.log(myMap(a,check))//return boolean values
console.log(a.filter(check))//return those values for which condition is true
console.log(myFilter(a,check))//return those values for which condition is true

/*  JSON and AJAX

AJAX :  Asynchronous Javascript and XML
It is just a combination of XMLHttpRequest object and HTML DOM

XMLHttpRequest: an object which helps us to communicate websites to transfer data

How AJAX Works?
1.  An Event Occur like button click or form submit etc.
2.  XMLHttpRequest object is created by JS
3.  XMLHttpRequest send a request to a server
4.  Server process the request 
5.  Server send back response 
6.  Response read by JS
7.  Proper action taken by js

XMLHttpRequest object methods :
1.  new XMLHttpRequest() : to create a new XMLHttpRequest object
2.  abort():  cancel the current request
3.  getAllResponseHeader(): return all response headers
4.  getResponseHeader(): return response any particular header
5.  open(): it generate a request
             parameters: 
            1.  method : get post put patch delete
            2.  url
            3.  async
            4.  user(optional)
            5.  password(optional)

6.  send()       :  it send a request to the server and use get method by default
7.  send(string) :  it send a request to the server and use post method by default

Response Text:
1.  XML data:responseXML
2.json data/text data:responseText

JSON (JavaScript Object Notation):it is a text format to transport the data
 XML:
 <employee>
 <eid>1001</eid>
 <name>Paras</name>
 <dsg>Developer</dsg>
 <salary>5000000</salary>
 <city>Modinagar</city>
 </employee>


 JSON:
 employee={
 "id": 1001,
 "name": "Paras",
 "dsg":"Developer",
 "salary":6000000,
 "city": Modinagar
 }


 JSON DataTypes:

 1.boolean
 2.array
 3.number
 4.string
 5.object
 6.null

 
 datatype we can't use in JSON:
 1.undefined
 2.data

 1.How to convert JSON into JS object

 JSON.parse() is used to convert JSON data into JS object
 syntax:
 jsObject=JSON.parse(jsonData)


 2.How to convert JS object into JSON 

 JSON.stringify()
 syntax:
 jsonData=JSON.stringify(jsData)
 


*/





