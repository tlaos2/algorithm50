function solution(arr){

    let answer = null;
    
    answer = arr.filter((v,i)=>{

        if(i === arr.indexOf(v)) return true;

    })

    return answer

}

console.log(solution(['aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd']));