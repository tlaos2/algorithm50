//"1924"	2	"94"
//"1231234"	3	"3234"
//"4177252841"	4	"775841"

function solution(number,k){
    
    let answer = '';
    let remain = k;

    for(let i = 0; i<number.length; i++){

        let str = number.slice(i+1).split('');
        let max = Math.max(...str);
        // if(number[i] > max){

        // }

                


    }

    return answer;
}


console.log(solution('1924', 2));