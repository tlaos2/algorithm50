function solution(arr, m){
    let answer =0;
    
    let lt=0;
    let sum =0;


    for(let rt=0; rt < arr.length; rt++){
        sum += arr[rt];
        if(sum === m){
            answer++;
        }
        else if(sum > m){
            while(sum >= m){
                sum-= arr[lt++];
                if(sum === m)answer++;
            }
        }
    }

    return answer;
}


let nums = [1,2,1,3,1,1,1,2];
console.log(solution(nums, 6))


