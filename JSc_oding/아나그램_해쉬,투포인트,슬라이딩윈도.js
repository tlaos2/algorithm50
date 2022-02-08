//모든 아나그램 (해쉬,투포인트,슬라이딩윈도우)

//풀이1
function solution(str1, str2) {
  let answer = 0;

  for (let rt = 0; rt < str1.length; rt++) {
    let t1 = str1.substr(rt, str2.length);
    if (isAnagram(t1, str2)) {
      answer++;
      console.log(t1);
    }
  }

  function isAnagram(s1, s2) {
    let rtn = true;
    let sH = new Map();
    for (let x of s1) {
      if (sH.has(x)) sH.set(x, sH.get(x) + 1);
      else sH.set(x, 1);
    }

    for (let x of s2) {
      if (!sH.get(x) | (sH.get(x) === 0)) {
        rtn = false;
        break;
      } else sH.set(x, sH.get(x) - 1);
    }
    return rtn;
  }

  return answer;
}

let st1 = 'bacaAacba';
let st2 = 'abc';

console.log(solution(st1, st2));
