(function(global){

  var Throttle = function(interval, fn){
    var wait = false;
    var fnArr = [fn];

    if(arguments[2]) {
      for(var i = 0; i < arguments.length; i++){
        fnArr.push(arguments[i]);
      }
    }

    return function(){ 
      if(!wait){
        wait = true;        
        _callEventHandlers(fnArr);        
        setTimeout(()=>{wait = false;}, 1000);
      }       
    }
  }

  var _callEventHandlers = function(fnArr){
    fnArr.forEach(function(fn){
      fn();
    });
  }

  global.Throttle = Thr = Throttle;

})(typeof window !== 'undefined' ? window : this);
