
class Pet {
    constructor(name, age, energy_level) {
        this.name = name;
        this.age = age;
        this.energy_level = energy_level;
    }

    eat(amount) {
        this.energy_level += amount;
        console.log(`${this.name} ate and now has an energy level of ${this.energy_level}.`);
    }

    sleep(hours) {
        this.energy_level += hours * 2; // Each hour of sleep restores 2 energy points
        console.log(`${this.name} slept for ${hours} hours and now has an energy level of ${this.energy_level}.`);
    }

    make_sound() {
        console.log("It makes a sound.");
    }
}

class Dog extends Pet {
    make_sound() {
        console.log("Woof! Woof!");
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

class Cat extends Pet {
    make_sound() {
        console.log("Meow! Meow!");
    }

    climb() {
        console.log(`${this.name} is climbing a tree!`);
    }
}

class Bird extends Pet {
    make_sound() {
        console.log("Chirp! Chirp!");
    }

    fly() {
        console.log(`${this.name} is flying high in the sky!`);
    }
}

class PetOwner {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.pets = [];
    }

    adopt_pet(pet) {
        this.pets.push(pet);
        console.log(`${this.ownerName} adopted ${pet.name}!`);
    }

    feed_pet(pet, amount) {
        pet.eat(amount);
    }

    put_pet_to_sleep(pet, hours) {
        pet.sleep(hours);
    }

    play_with_pet(pet) {
        console.log(`${this.ownerName} is playing with ${pet.name}.`);
        pet.make_sound();
    }

    show_pets() {
        console.log(`${this.ownerName}'s pets:`);
        this.pets.forEach(pet => {
            console.log(`- ${pet.name} (Age: ${pet.age}, Energy Level: ${pet.energy_level})`);
        });
    }
}

// Example Usage:
const owner = new PetOwner("Alex");
const dog = new Dog("Buddy", 3, 50);
const cat = new Cat("Whiskers", 2, 40);
const bird = new Bird("Tweety", 1, 30);

owner.adopt_pet(dog);
owner.adopt_pet(cat);
owner.adopt_pet(bird);

owner.feed_pet(dog, 10);
owner.put_pet_to_sleep(cat, 4);
owner.play_with_pet(bird);

owner.show_pets();
class Pet {
    constructor(name, age, energy_level) {
        this.name = name;
        this.age = age;
        this.energy_level = energy_level;
        this.happiness = 50; // Default happiness level
        this.hunger = 50; // Default hunger level
    }

    eat(amount) {
        this.energy_level += amount;
        this.hunger -= amount / 2; // Eating reduces hunger
        if (this.hunger < 0) this.hunger = 0;
        console.log(`${this.name} ate and now has an energy level of ${this.energy_level} and hunger level of ${this.hunger}.`);
    }

    sleep(hours) {
        this.energy_level += hours * 2; // Each hour of sleep restores 2 energy points
        console.log(`${this.name} slept for ${hours} hours and now has an energy level of ${this.energy_level}.`);
    }

    play() {
        this.happiness += 10;
        console.log(`${this.name} played and is now happier! Happiness level: ${this.happiness}`);
    }

    ignore() {
        this.happiness -= 10;
        if (this.happiness < 0) this.happiness = 0;
        console.log(`${this.name} feels ignored. Happiness level: ${this.happiness}`);
    }

    make_sound() {
        console.log("It makes a sound.");
    }
}

class Dog extends Pet {
    make_sound() {
        console.log("Woof! Woof!");
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

class Cat extends Pet {
    make_sound() {
        console.log("Meow! Meow!");
    }

    climb() {
        console.log(`${this.name} is climbing a tree!`);
    }
}

class Bird extends Pet {
    make_sound() {
        console.log("Chirp! Chirp!");
    }

    fly() {
        console.log(`${this.name} is flying high in the sky!`);
    }
}

class Snake extends Pet {
    make_sound() {
        console.log("Hiss! Hiss!");
    }

    slither() {
        console.log(`${this.name} is slithering around!`);
    }
}

class PetOwner {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.pets = [];
    }

    adopt_pet(pet) {
        this.pets.push(pet);
        console.log(`${this.ownerName} adopted ${pet.name}!`);
    }

    feed_pet(pet, amount) {
        pet.eat(amount);
    }

    put_pet_to_sleep(pet, hours) {
        pet.sleep(hours);
    }

    play_with_pet(pet) {
        pet.play();
    }

    ignore_pet(pet) {
        pet.ignore();
    }

    show_pets() {
        console.log(`${this.ownerName}'s pets:`);
        this.pets.forEach(pet => {
            console.log(`- ${pet.name} (Age: ${pet.age}, Energy Level: ${pet.energy_level}, Happiness: ${pet.happiness}, Hunger: ${pet.hunger})`);
        });
    }
}

// Example Usage:
const owner = new PetOwner("Alex");
const dog = new Dog("Buddy", 3, 50);
const cat = new Cat("Whiskers", 2, 40);
const bird = new Bird("Tweety", 1, 30);
const snake = new Snake("Slither", 2, 35);

owner.adopt_pet(dog);
owner.adopt_pet(cat);
owner.adopt_pet(bird);
owner.adopt_pet(snake);

owner.feed_pet(dog, 10);
owner.put_pet_to_sleep(cat, 4);
owner.play_with_pet(bird);
owner.ignore_pet(snake);

owner.show_pets();

