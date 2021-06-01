// Batman or Batwoman
// let pattern = /Bat(wo)?man/;

// wraps route strings as regex pattern in express

// Batwowowowowoman
let pattern = /Bat(wo)*man/;

let str = "The adventures of Batman.";

let result = str.match(pattern);

console.log(result);