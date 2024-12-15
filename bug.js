function foo(a, b) {
  return a + b;
}

function bar() {
  let result = foo(1, '2');
  console.log(result); // Output: "12"
}

bar();