var t1;
var t2;

var counter = 0;
var originalFib = function(num){
  if(num === 1 || num === 0) return num;
  console.log(counter++);
  return originalFib(num - 2) + originalFib(num - 1);
}

t1 = new Date().getTime();
console.log( originalFib(25) ); // 121391 operations - 4272ms
t2 = new Date().getTime();
console.log('originalFib() took ' + (t2 - t1) + ' ms to execute');

// basically you create a dictionary with
// fnParams: return values
counter = 0;
var memoizedFib = (function(num) {
  var mem = [];

  return function fib(num){
    var val;

    if(mem[num]){
      console.log('fn ' + num + 'memoized. not running again.');
      val = mem[num];
    } else {
      if(num === 1 || num === 0) 
        val = num;
      else {
        val = fib(num - 2) + fib(num - 1);
      }
      console.log(counter++);
      mem[num] = val;
    }

    return val;
  }
})();

t1 = new Date().getTime();
console.log( memoizedFib(25) ); // 25 runs - 3ms
t2 = new Date().getTime();
console.log('originalFib() took ' + (t2 - t1) + ' ms to execute');

