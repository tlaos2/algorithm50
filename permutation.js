let nums = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
let maxNum = 500;
let idx =0;

for(let i=0; i < nums.length; i++){    
    let nums2 = [...nums];
    let n = nums2.splice(i,1);
    getPermutation(nums2, [...n]);
}


function getPermutation(arr, result){

    if(result.length === 3){
        console.log(idx++, result.join(','));
        return;
    }
    else{
        
        for(let j=0; j < arr.length; j++){

            let num2 = [...arr];
            let n = num2.splice(j,1);                                                                     
            getPermutation(num2,  [...result, ...n]);
        }
    }
}