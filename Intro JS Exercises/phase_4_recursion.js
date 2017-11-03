function range(start, end) {
  if(start === end) {
    return [end];
  }else {
    return range(start, end-1).concat([end]);
  }
}

console.log(range(1, 12));


function sumRec(array) {
  if(array.length === 0) {
    return 0;
  }
  return array.pop() + sumRec(array);
}

console.log(sumRec([2,5,7,19]));



function exponent(base, exp) {
  if(exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

console.log(exponent(2, 5));


function fibonacci(n) {
  if(n <= 0){
    return [];
  }
  if(n == 1){
    return [0];
  }

  if(n == 2){
    return [0,1];
  }

  // let fibs = fibonacci(n-1) + fibonacci(n-2);
  let fibs = fibonacci(n-1);

  fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);

  return fibs;
}
// 0,1
//0,1,1,2,5,8
// console.log(fibonacci(10))

function bsearch(arr,target){
  if(arr.length === 0) {
    return -1;
  }
  var middle = Math.floor(arr.length / 2);

  if (arr[middle] === target){
    return middle;
  } else if(target < arr[middle]){
    return bsearch(arr.slice(0,middle), target);
  } else{
    var b = bsearch(arr.slice(middle + 1),target);
    if(b === -1) {
      return -1;
    } else {
      return middle + 1 + b;
    }
  }
}


// console.log(bsearch([1,2,3,4,5],1));
// console.log(bsearch([1,2,3,4,5],2));
// console.log(bsearch([1,2,3,4,5],3));
// console.log(bsearch([1,2,3,4,5],4));
// console.log(bsearch([1,2,3,4,5],5));

function mergesort(array) {
  if(array.length < 2)
    return array;

  var middle = Math.floor(array.length / 2);

  var left = mergesort(array.slice(0,middle));
  var right = mergesort(array.slice(middle));
  var merged = merge(left,right);
  return merged;

}

function merge(left,right){
  let result = [];

  while(left.length !== 0 && right.length !== 0){
    if(left[0] > right[0]){
      result.push(right.shift());
    } else if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }

  }

  return result.concat(left, right);

}



console.log(mergesort([5,4,3,5,2,1,0,-4]));



function subsets(arr){
  if (arr.length === 0)
    return [ [] ];

    var first = arr[0];
    var rest = subsets(arr.slice(1));

     var final = rest.map(function(el) {
      return [first].concat(el);
    });

    return rest.concat(final);
}


console.log(subsets([1]));
// [], [1],[2],[3], [1,2],
