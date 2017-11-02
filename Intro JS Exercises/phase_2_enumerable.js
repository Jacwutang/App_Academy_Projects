Array.prototype.myEach = function(callback){

  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }


};


// [1,2,3].myEach(function(el){
//   console.log(el * 2);
// });


Array.prototype.myMap = function(callback){
  let result = [];
  for(let i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }

  return result;
};

var arr = [1,2,3];

console.log(arr.myMap(function(el){
  return el * 2;
}));




Array.prototype.myReduce = function(callback, initial) {
  var array = this;
  var accumulator = 0;

  if(initial !== undefined) {
    accumulator = initial;
  } else {
    accumulator = this[0];
    array = array.slice(1);
  }

  for(var i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
};

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25));

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}));
