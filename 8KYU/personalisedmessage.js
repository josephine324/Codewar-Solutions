function greet (name, owner) {
    if(name===owner) {
      return "Hello boss";
    } else {
      return "Hello guest";
    }
  }
  console.log(greet("Alice", "Alice"));
  console.log(greet("John", "Peace"));