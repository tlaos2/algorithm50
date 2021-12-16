function solution(numbers) {
  var answer = 0;
  let pnums = [];

  let nums = numbers.split('');
  for (let i = 0; i < numbers.length; i++) {
    getPermutation(nums, i + 1, []);
  }

  function getPermutation(num, len, result) {
    if (result && result.length === len) {
      let n = parseInt(result.join(''));
      if (IsPrime(n) && !pnums.includes(n)) {
        pnums.push(n);
      }
      return result;
    } else {
      for (let i = 0; i < num.length; i++) {
        let t = [...num.flat()];
        let f = t.splice(i, 1);
        getPermutation(t, len, [...result, ...f]);
      }
    }
  }
  function IsPrime(n) {
    if (n === 0 || n === 1) {
      return false;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
    }
    return true;
  }
  answer = pnums.length;
  return answer;
}

solution('011');
// solution('17');
