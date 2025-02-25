//meet is an object that  that have key value pairs of names of workers and their happiness rating
function outed(meet, boss) {
    let totalScore = 0;
    let numPeople = Object.keys(meet).length;

    for (let person in meet) {
        if (person === boss) {
            totalScore += meet[person] * 2; // Boss's score counts twice
        } else {
            totalScore += meet[person];
        }
    }

    let averageHappiness = totalScore / numPeople;

    return averageHappiness <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

// Example usage:
const team = {
    "Alice": 6,
    "Bob": 4,
    "Charlie": 8,
    "David": 3
};

console.log(outed(team, "Charlie")); // Output: "Nice Work Champ!"
console.log(outed(team, "Bob")); // Output: "Get Out Now!"
