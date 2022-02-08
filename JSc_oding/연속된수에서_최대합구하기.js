function solution(arr, k) {
  let max = 0;
  let sum = 0;
  let lt = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  max = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];

    max = Math.max(sum, max);
  }

  return max;
}

let ar = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(ar, 3));
