function isAnagram (test, original){
    let testArray = test.toLowerCase().split(''); //inorder to get individual characters and start working on each character
    let originalArray = original.toLowerCase().split('');
  //   console.log(testArray, originalArray);
    for (char of testArray){
      const index = originalArray.indexOf(char);
      if (index != -1) {
        originalArray.splice(index, 1);
      } else {
        return false;
      }
    }
  //   console.log(originalArray);
    if(originalArray.length > 0){
      return false;
    }
    return true;
}
  console.log(isAnagram("Buckethead", "DeathCubeK"));
  