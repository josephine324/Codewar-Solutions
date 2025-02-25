// function beggars(values,n){
//     // we have an array of values
//     //number of beggars
//     //what is going to happen is distribution for each beggar
//     for( value of values){
//         //give one to one beggar , simply do distribution so that each beggar has their  own arr
//         beggarArr.reduce((a,b)=> a+b,0){

//         }
//         //now you should have sums equal to the number of your beggars  and put them in an arr
//     }
// }
// //finally
function beggars(values, n){
    //This creates the sum array
  const beggarSum = Array(n).fill(0);
    for(let i=0; i < values.length; i++) {
       const distributeBeggar= i%n;//This distributes values amongst beggars
       // I am going to show you how it is done
       //for example arr[1,2,3,45,6,7] and 3 beggars
      beggarSum[distributeBeggar]+=values[i];// now add the values to the sum Array. Now after distributing everything   
    }
    return beggarSum;
  }
  console.log(beggars([2,4,5,6,7,2],3));