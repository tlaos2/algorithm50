//m 이하의 수열찾기
function solution(arr, m) {
  let answer = 0;
  let sum = 0;

  //풀이1
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    //개수 구하는 식
    answer += rt - lt + 1;
  }

  // 풀이2
  // for (let i = 0; i < arr.length; i++) {
  //   sum = 0;
  //   for (let j = i; j < arr.length; j++) {
  //     sum += arr[j];
  //     if (sum <= m) {
  //       answer++;
  //     } else {
  //       break;
  //     }
  //   }
  // }

  return answer;
}

let ar = [1, 3, 1, 2, 3];
console.log(solution(ar, 5));
