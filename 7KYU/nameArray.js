function capMe(names) {
    return names.map(name=>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());// map acts on each individual thing in the array
}
console.log(capMe(["benise", "ruth", "douce","reine"]));