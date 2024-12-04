function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode === correctCode){
      return true;
    } else {
      return false;
    }
    const current = new Date(currentDate);
    const expiry = new expiration(expirationDate);
    if (current<=expiry){
      return true;
    }
  }
  console.log(checkCoupon("345","123","october 4, 2024", "November 6 ,2024"));

