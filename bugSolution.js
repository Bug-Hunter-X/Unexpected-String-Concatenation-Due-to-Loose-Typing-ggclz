function foo(a, b) {
  //Explicitly convert parameters to numbers
  a = Number(a);
  b = Number(b);

  // Check if both are valid numbers
  if (isNaN(a) || isNaN(b)) {
    return NaN; //Handle non-numeric inputs gracefully
  }
  return a + b;
}

function bar() {
  let result = foo(1, '2');
  console.log(result); // Output: 3
}

bar();