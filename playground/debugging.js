/*node inspect playground/debugging.js
* n -> next
* c -> automatically goes the last point
* repl -> read eval print loop*/


var person = {
    name: "olgacz"
}

debugger;

person.age = 30;
person.name = "Mike";

console.log(person);

//google chrome debugging
//node --inspect-brk playground/debugging.js
//chrome://inspect/#devices