// parsing the url to get domain name
// how do  you know this is the domain name first of all and then you splice it 
function domain(url){
    return url.replace("http://", "")
    .replace("https://", "")
    .replace("www.", "").split(".")[0]

}
console.log(domain("http://github.com/carbonfive/raygun"));