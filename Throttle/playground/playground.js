$(window).on('resize', Throttle(1000, function(){
  console.log('throttle resize');
}));

