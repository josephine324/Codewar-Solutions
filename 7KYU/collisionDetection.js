function collision(x1, y1, radius1, x2, y2, radius2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= (radius1 + radius2);
  }
  
  // Example usage:
  console.log(collision(0, 0, 5, 7, 0, 5)); 
  console.log(collision(0, 0, 5, 15, 0, 5)); 
  console.log(collision(0, 0, 10, 5, 5, 5)); 
  