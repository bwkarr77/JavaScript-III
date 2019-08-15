/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 
* 1. Window Binding - 'this' points to the main window, which displays all of javascript.
* 2. Implicit Binding - when a method is used inside an object, 'this' will refer to the Object. this.keyName -> will produce the value under the Object's key.
* 3. New Binding - Empty object is created and referenced by 'this', properties/methods are inherited as a prototype, and the newly created object is referenced by the end (if no object was returned explicitly).
* 4. Explicit Binding - forcing a function call to refer 'this' to a particular object, without putting a property function reference on the object. Using call, apply, and bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myFunction = function() {
    console.log(this);
 }
 
 myFunction();
// Principle 2

// code example for Implicit Binding
var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;
fx("Mark");   // Hi Mark, my name is  

// Principle 3

// code example for New Binding
function CordialPerson(greeterPhrase) {
    this.greeting = 'Hello ';
    this.greeterPhrase = greeterPhrase;
    this.speak = function() {
      console.log(this.greeting + this.greeterPhrase);
    //   console.log(this);
    };
}
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
};

var greetPerson = greet.bind(person); 
greetPerson(); // Alex