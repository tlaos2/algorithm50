//###배열일 딕셔너리로###
let rr = ['lion', 'tiger'].reduce((result, curr) => {
  result[curr] = curr;
  return result;
}, {});

//###배열원소들의 출현 갯수를 세고 딕셔너리 형태로 구성
let contedNmaes = ['A', 'B', 'A', 'A', 'B'].reduce(function (result, cur) {
  if (cur in result) {
    result[cur]++;
  } else {
    result[cur] = 1;
  }
  return result;
}, {});
console.log(contedNmaes);

//### 배열 원소들 중 최대값 구하기
let max = [1, 2, 3, 4, 5].reduce((max, cur) => Math.max(max, cur), -Infinity);

//## 이차원 배열 초기화
let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0)); 


//## 8방향 탐색
let dx = [-1,-1,0,1,1,1,0,-1]
let dy = [0,1,1,1,0,-1,-1,-1]


