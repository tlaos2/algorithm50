function solution(board){
    let answer =0;

    let dx = [-1,-1,0,1,1,1,0,-1]
    let dy = [0,1,1,1,0,-1,-1,-1]
    let n = board.length

    function DFS(x,y){

        for(let i=0; i<8; i++){

            let nx = x + dx[i];
            let ny = y + dy[i];
            // console.log(nx,ny)
            if(nx >=0 && nx < n && ny >=0 && ny <n &&  board[nx][ny]===1){
                board[nx][ny]=0;
                DFS(nx,ny);
            }
        }
    }

    for(let i = 0; i< n; i++){
        for(let j = 0 ; j < n; j++){

            if(board[i][j]===1){
                answer++;
                DFS(i,j);
            }
        }
    }
        


    return answer;

}


let arr=[[1, 1, 0, 0, 0, 1, 0], 
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 0]];


console.log(solution(arr));











