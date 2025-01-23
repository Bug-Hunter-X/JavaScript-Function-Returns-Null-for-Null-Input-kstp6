function foo(a, b) {
  let result = 0; 
  if (a !== null) {
    result += a; 
  }
  if (b !== null) {
    result += b; 
  }
  return result; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0