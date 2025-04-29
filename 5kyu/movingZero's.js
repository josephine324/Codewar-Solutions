/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3, */
/*so firsts go through the array and then if you meet zero push it to the end */
function moveZerros(arr){
    const result=[];
    const zeros=[];
    arr.map(item=>{
        if(item===0){
            zeros.push(item)
        } else{
            result.push(item)
        }
    })
    return result.concat(zeros)
}
console.log(moveZerros(["hair",0,0,9, false,1,3,4,5]));
