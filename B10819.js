///차이를 최대로
let nums = [20, 1, 15, 8, 4, 6];

// console.log(nums);
let i = 0;
let arrRtn = [];
nums.forEach((item, idx) => {
  console.log(item, idx);
  let temp = [...nums];
  let fixednum = temp.splice(idx, 1);
  getPermutation(temp, [fixednum]);
  // arrRtn.push(getPermutation(temp, [fixednum]));
});

function getPermutation(arr, result) {
  if (arr.length === 1) {
    console.log(++i, [...result, arr[0]].join(','));

    arrRtn.push([...result, arr[0]]);
    return [...result, arr[0]];
  } else {
    for (let i = 0; i < arr.length; i++) {
      let tmp = [...arr];
      let fixednum = tmp.splice(i, 1);
      getPermutation(tmp, [...result, fixednum]);
    }
  }
}

console.log(arrRtn);
