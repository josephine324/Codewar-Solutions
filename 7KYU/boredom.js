function boredom (staff){
  let departmentNumber ={
    accounts: 1,
    finance:2,
    canteen:10,
    regulation : 3,
    trading: 6,
    change: 6,
    IS :8,
    retail: 5,
    cleaning :4,
    "pissing about" :25
  }
  /*now we have staff as an object and we can not iterate through it as  like it is an array .reduce and map methods are for arrays. We need to find ways we can have the the departments */

  let totalScore = Object.values(staff).map(department=>departmentNumber[department] || 0).reduce((sum, score) => sum +score,0);
  if(totalScore <=80) return 'kill me now'
  if(totalScore < 100 && totalScore > 80) return  'i can handle this'
  return 'party time!!'

}
staff={
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change', 
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS', 
  alex: 'trading', 
  john: 'accounts',
  mr: 'finance'
}
   
  staff2 ={
    tim: 'IS',
    jim: 'finance',
    randy: 'pissing about',
    sandy: 'cleaning',
    andy: 'cleaning',
    katie: 'cleaning',
    laura: 'pissing about', 
    saajid: 'regulation',
    alex: 'regulation', 
    john: 'accounts',
    mr: 'canteen'
  }
  staff3= {
    tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about'
  }
 

console.log(boredom(staff3));