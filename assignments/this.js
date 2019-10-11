/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is literally pointing to everything in JavaScript.
It doesn't have any context. 
    
* 2. Implicit Binding is automatic with objects and methods.
When used within an object, the `this` keyword implicitly (automatically)
binds to the parent object. "use strict" can be used to prevent this from ever
happening.

* 3. Explicit Binding is for functions and explicitly tells the compiler which
object to bind the `this` keyword to.

* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const hobbit = {
    name: "Samwise",
    age: 32,
    food: "taters",
    cook: function() {
      return `${this.name} likes to cook ${this.food}.`
    }
  }

  console.log(hobbit.cook());

// Principle 3
// code example for New Binding
function Parent(parentAttributes){
    this.newAge = parentAttributes.age;
    this.newName = parentAttributes.name;
    this.newLocation = parentAttributes.location;
    this.newPhrase = parentAttributes.phrase;
}

const fred = new Parent({
    age: 35,
    name: "Fred",
    location: "Bedrock",
    phrase: "Yabba dabba do!"
});

console.log(fred);

// Principle 4
// code example for Explicit Binding
const person = {
    "name": "Nick"
  }
  
  function introduction(name,html,css,js) {
    return `Hello, my name is ${name} and I like to program in ${html}, ${css}, ${js}.`;
  }
  
  //Below, we are EXPLICITLY passing in the `name` property of the `person` object as a parameter when we invoke and log the `introduction` function:
  console.log(introduction(person.name,"HTML","CSS","JavaScript"));