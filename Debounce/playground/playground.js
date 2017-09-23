function log(){
  console.log('debounce');  
}

// var debounce_leading = Debounce(1000, log);

var debounce_trailing = Debounce(1000, log, false, true);

$(window).on('resize', debounce_trailing);

