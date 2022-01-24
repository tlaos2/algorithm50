function solution(numbers, target) {

    var answer = 0;
    
    function DFS (numbers, acc){

        if(numbers.length === 0){
            if(acc === target){
                answer++;
            }            
            return;
        }
        else{
            let nums = numbers.slice()
            let n = nums[nums.length-1];
            nums.length = nums.length-1;               
            DFS(nums, acc + n*-1);
            DFS(nums, acc + n);
        }
    }
    
    DFS(numbers, 0);
    
    return answer;
}

console.log(solution([1,1,1,1,1], 5));