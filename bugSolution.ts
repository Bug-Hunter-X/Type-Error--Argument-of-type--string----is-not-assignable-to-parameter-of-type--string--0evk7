function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user[0])); // Correct: Pass the first element of the array
console.log(greeterArray(user)); // Correct: Use a function that accepts an array