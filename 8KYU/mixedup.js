function mixedUp(arr) {
    let correctOrder= ["head", "body", "tail"];
    return correctOrder.map(item => arr.find(element => element ===item));// you loop through the correct order and try to find it's match in the input iyo utibonye you add it to the result
}
console.log(mixedUp(["tail", "body", "head"]));