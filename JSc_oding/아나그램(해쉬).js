//두개 문자열의 구성원소의 수를 비교(해쉬 맵을 이용) 성공 true / 실패 false
function solution(str1, str2) {
  let answer = true;

  let sh = new Map();

  for (let x of str1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  //   console.log(sh);
  for (let x of str2) {
    if (!sh.has(x) || sh.get(x) === 0) {
      answer = false;
      break;
    } else sh.set(x, sh.get(x) - 1);
  }

  return answer;
}

let s1 = 'AbaAeCe';
let s2 = 'baeeACA';
console.log(solution(s1, s2));
