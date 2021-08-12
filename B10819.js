///차이를 최대로
let nums = [20, 1, 15, 8, 4, 6];

// console.log(nums);
let i = 0;
let arrRtn = [];
let maxDiff = 0;
nums.forEach((item, idx) => {
  console.log(item, idx);
  let temp = [...nums];
  let fixednum = temp.splice(idx, 1);
  getPermutation(temp, [fixednum]);  
});

function getPermutation(arr, result) {
  if (arr.length === 1) {
    // console.log(++i, [...result, arr[0]].join(','));
    let rtnArr =[ ...result.flat(), arr[0]]; 
    let diff = getDiff(rtnArr);
    if(getDiff(rtnArr) > maxDiff){
      maxDiff = diff;
      console.log('MAX DIFF :' , diff,"-" ,  [...result, arr[0]].join(','));
    }

    arrRtn.push(rtnArr);
    return [ ...result.flat(), arr[0]];
  } else {
    for (let i = 0; i < arr.length; i++) {
      let tmp = [...arr];
      let fixednum = tmp.splice(i, 1);
      getPermutation(tmp, [result.flat(), fixednum]);
    }
  }
}

function getDiff(arr){

  let rtn = 0;
  for(let i=0; i < arr.length -1; i++){
    rtn += Math.abs(arr[i]-arr[i+1]);
  }

  return rtn;
}


console.log(arrRtn);
