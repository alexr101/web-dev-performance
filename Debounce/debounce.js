(function(global){

  var Debounce = function(wait, fn, leading, trailing){
    var timeout;
    var leading = leading || true;
    var fnAllowed = (leading !== 'undefined') ? true : false;
    console.log(leading);

    return function(){      
      clearTimeout(timeout); // cancel previous timer

      if(fnAllowed){
        fn();
        fnAllowed = false;
      }

      timeout = setTimeout(function(){
        if(leading)
          fnAllowed = true;
        else if(trailing)
          fn();
      }, wait);
    }
  }

  global.Debounce = Debounce;
})(window);

