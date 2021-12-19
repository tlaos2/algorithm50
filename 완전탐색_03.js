function solution(brown, yellow) {
  var answer = [];
  let i = 1;
  for (i = 1; i <= Math.trunc(yellow / 2); i++) {
    if (yellow % i === 0) {
      answer = getWithHeight(brown, yellow, i);
      if (answer.length > 0) {
        break;
      }
    }
  }

  if (i === 1) {
    answer = getWithHeight(brown, yellow, i);
  }

  function getWithHeight(b, y, i) {
    let ret = [];
    let w = 0;
    let h = 0;
    let brownCount = 0; // brown 계산

    w = Math.trunc(y / i);
    h = i;
    brownCount = w * 2 + h * 2 + 4;

    console.log(w, h, i, brownCount);

    if (brown === brownCount) {
      ret = [w + 2, h + 2];
    }

    return ret;
  }

  return answer;
}

console.log(solution(24, 24));
