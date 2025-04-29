/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3" */

/*So what they what is if a value is placed in it dhould return it's corresponding hexadecimal representation if the number passed isn ot valid it should be rounded to the nearest valid value */
function rgb(r, g, b) {
   function clamp(value){
    value=Math.round(value);
    if(value<0){
        return 0
    } else if(value>255){
        return 255
    } else{
        return value
    }
}
function toHex(value){
    let hex= value.toString(16);
    if(hex.length===1){
        hex= "0"+ hex;
    }
    return hex.toUpperCase();
}
    let redHex = toHex(clamp(r));
    let greenHex = toHex(clamp(g));
    let blueHex = toHex(clamp(b));

    // Combine all 3 hex values
    return redHex + greenHex + blueHex;
}
console.log(rgb(123,123,677))