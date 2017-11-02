Array.prototype.uniq = function (){
  let result = [];

  for(let i = 0 ; i < this.length; i++){
    if (result.indexOf(this[i]) === -1){
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.twoSum = function() {
  let result = [];

  for(var i = 0; i < this.length - 1; i++) {
    for(var j = i + 1; j < this.length; j++) {
      if(this[j] + this[i] === 0) {
        result.push([i,j]);
      }
    }
  }

  return result;
};

Array.prototype.transpose = function() {
  var result = [];

  for(var i = 0; i < this.length;i++){
    var toPush = [];
    for(var j = 0; j < this.length; j++) {
      toPush.push(this[j][i]);
    }
    result.push(toPush);
  }

  return result;
};

// var array = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(array.transpose());
// console.log(array);
