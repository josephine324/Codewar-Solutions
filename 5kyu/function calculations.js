// The task is to get the result using functions  everything has to be defined and then used  you use them 
// so now the issue is how do you define such stuff like function five or minus or times 
function zero(op){
    return op? op(0):0
}//meaning the op is the operation sign passed as an argument is there is an operation passed pass that number in the operation if no operation just return the number
function one(op){
    return op? op(1):1
}
function two (op){
    return op? op(2):2
}
function three(op){
    return op? op(3):3
}
function four (op){
    return op? op(4):4
}
function five (op){
    return op? op(5):5
}
function six(op){
    return op? op(6):6
}
function seven(op){
    return op? op(7):7
}
function eight(op){
    return op? op(8):8
}
function nine(op){
    return op? op(9):9
}

function plus(right){
    return function(left){
        return left+right
    }
}
function minus(right){
    return function(left){
        return left-right
    }
}
function times(right){
    return function(left){
       return left * right
    }
}
function dividedBy(right){
    return function(left){
      return Math.floor(left/right)  
    }
}

console.log(two(times(three())));