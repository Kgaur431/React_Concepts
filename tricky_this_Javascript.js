/**  IMPORTANT
 *  When we use This. be CAREFUL When we write an arrow function & using this in it.
 *    it's depneds on how we are calling the function  check below code
*/


const obj = {
  fn1 : function(){
    console.log(this); // this refers to the object in which it is written
  },

  fn2: () => {
    console.log(this); // this refers to the global object means parents of obj = global object
  }
}


obj.fn1(); // {fn1: ƒ, fn2: ƒ}
// when we write this into normal function then this refers to the object in which it is written

obj.fn2(); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// window is the global object which is given to us by the browser.


function x(){
  console.log(this);
  function y(){
    console.log(this);
  }
  y();
  function z(){
    console.log(this);
  }
  z();
}

x();
// here, this --> it does not depends that where we are, its depends on how we are calling the function


const person1 = {
  name: "Kartik",

  print : function(){
    console.log(this);
  },
}

const person2 = {
  name: "Gour"
}

function x(){
  console.log(this);
}
x();
x.call(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …})
// both x() & x.call(this) are same. 

x.call(person1); // {name: "Kartik"}
x.call(person2); // {name: "Gour"}
// call() is a method which is used to call a function with a given this value & arguments provided individually.

// how we call the function, will determine what the this will be. 
// like :- if we call the function normally x() then this will be the global object. & if we call the function x()
// with the person1 object then this will be the person1 object.


person1.print(); // {name: "Kartik"}
person1.print.call(); // Window {window: Window, self: Window, document: document, name: "", location: Location, …} 
person1.print.call(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …} 
person1.print.call(person2); // {name: "Gour"}


// the value of this (line 46) will depends on how it is being called. like how print function is called.  




// Arrow Function

const obj1 = {
  firstName : "Kartik",
  printName : () => {
    console.log(this.firstName);
  },
  printName2 : function ()  {
    console.log(this.firstName);
  }
}

obj1.printName(); // undefined --> because this refers to the global object which is window object & window object does not have firstName property.
obj1.printName2(); // Kartik --> because this refers to the object in which it is written.