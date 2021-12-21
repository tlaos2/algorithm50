function solution(name) {
  var answer = 0;
  let str = Array.from({ length: name.length }, () => 'A');
  let nm = name.split('');

  console.log(name);
  let cnt = 0; //움직인 수
  let strCnt = 0; //확인된 문자수
  let i = 0;

  while (strCnt <= nm.length) {
    let u = up(str[i], nm[i]);
    let d = down(str[i], nm[i]);
    cnt += Math.min(u, d);

    //이동
    let left = moveLeft(str, i, 1);
    let right = moveRight(str, i, 1);

    if (left[0] < right[0]) {
      i = left[0];
      strCnt += left[1];
    } else {
      i = right[0];
      strCnt += right[1];
    }
    strCnt++;
  }

  //일치하지 않는위치 찾기
  //idx, strCnt , moveCount
  function moveLeft(s, curIdx, moveCount) {
    let i = 0;
    let count = 0;
    if (s[curIdx] != nm[curIdx]) {
      return [curIdx, count, moveCount];
    } else {
      let nextIdx = curIdx === 0 ? s.length - 1 : curIdx - 1;
      return moveLeft(s, nextIdx, moveCount + 1);
    }
  }

  //일치하지않는위치 찾기
  function moveRight(s, curIdx, moveCount) {
    let i = 0;
    let count = 0;
    if (s[curIdx] != nm[curIdx]) {
      return [curIdx, count, moveCount];
    } else {
      let nextIdx = curIdx === 0 ? s.length - 1 : curIdx - 1;
      return moveLeft(s, nextIdx, moveCount + 1);
    }
  }

  function up(fromS, toS) {
    let f = fromS.charCodeAt(0);
    let t = toS.charCodeAt(0);

    if (f <= t) {
      return t - f;
    } else {
    }
  }

  function down(fromS, toS) {}

  return answer;
}

let str1 = 'JEROEN'; //56
let str2 = 'JAN'; //23

console.log(solution(str1));
