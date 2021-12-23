//"1924"	2	"94"
//"1231234"	3	"3234"
//"4177252841"	4	"775841"

function solution(number, k) {
  var answer = '';
  let remainK = k;
  let strLength = number.length - k;

  let i = 0;
  while (strLength > 0) {
    //전체문자에서 가능한 문자까지 자른다.
    let str = number.slice(i, number.length - strLength + 1).split('');
    //가장큰 숫자 찾기
    let max = Math.max(...str);
    let maxIndex = str.indexOf(String(max));
    answer += max;

    //문자 시작위치 이동
    i += maxIndex + 1;

    //만들수있는 문자 수 계산
    strLength--;
  }

  return answer;
}

console.log(solution('4177252841', 4));
