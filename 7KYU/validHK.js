function isValidHKPhoneNumber(input) {
    const regex= /^d{4} d{4}$/;
    return regex.test(input);
}
function hasValidHKPhoneNumber(input) {
    const regex= /\b d{4} \b/;
    return regex.test(input);
}
console.log(hasValidHKPhoneNumber("1234 abc 3456"));