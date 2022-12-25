

var bind = function(a,b) {
	
  args1=Array.prototype.slice.call(arguments,2);

  return function () {
    var args2=Array.prototype.slice.call(arguments);
     return a.apply(b,[...args1,...args2]);
  }
  // TODO: Your code here
};

Function.prototype.bind = function(scope) {


  var args1 = Array.prototype.slice.call(arguments, 1);

  var fn=this;
    return function () {
      var args2 = Array.prototype.slice.call(arguments);
        return fn.apply(scope,[...args1,...args2]);
    };
};
