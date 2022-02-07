//상하좌우 검색 하여 봉우리 개수 구하기 
function solution(arr){

    let answer =0;
    let n =arr.length;

    let dx = [-1, 1,  0, 0 ]
    let dy = [ 0, 0, -1, 1 ]
    
    for(let i=0; i < n; i++){
        for(let j=0; j < n; j++){
            answer += isBong(i,j);
        }
    }

    function isBong(x,y){

        let rtn = 1;
        for(let k=0; k < 4; k++){

            let xx = dx[k] + x;
            let yy = dy[k] + y;
            if(xx>=0 && xx < n && yy >=0 && yy < n && arr[x][y] <= arr[xx][yy])
            {
                rtn = 0;
                break;
            }
        }

        if(rtn > 0)
            console.log(x,y, arr[x][y])

        return rtn;
    }

    return answer;
}



let bong = [
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2]
]
//상,하,좌,우

console.log(solution(bong))