var loop = function(num) {
  var counter = 0;
  for (var i = 0; i < num; i++) {
    counter++;
  }
}


// If the function has parameters
// you have to pass it inside a closure
function fnPerformance(fn) {
  var t1 = new Date().getTime();
  fn();
  var t2 = new Date().getTime();
  return t2 - t1;
}

var t1 = fnPerformance(function(){ loop(10000000) });
var t2 = fnPerformance(function(){ loop(100000000) });
var t3 = fnPerformance(function(){ loop(1000000000) });

console.log(t1 + 'ms');
console.log(t2 + 'ms');
console.log(t3 + 'ms');
