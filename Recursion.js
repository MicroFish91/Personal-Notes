// power(2, 3) => 2^3

function power(base, exp){
  let value = base;
  if(exp == 0) return 1;

  return base * power(base, exp - 1);
}

console.log(power(2, 3));

// (2^3) = 2 * (2^2)
// (2^2) = 2 * (2^1)
// (2^1) = 2 * (2^0)

function revString(string){

  let newString = "";

  if(string.length === 0) return '';

  return revString(string.slice(1)) + string[0];

}

console.log(revString('hello world'));

// 'hello' = 'h' + 'ello'
// 'ello' = 'e' + 'llo'


function factorial(n) {
  if(n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));

// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!

function recursiveRange(n){
  if(n === 1) return 1;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(5));

// 6+ = 6 + 5+
// 5+ = 5 + 4+


// Palindrome
