const repeatString = function(word ,repeats) {
    let result = "";
    if(word === "") return result;
    if(repeats < 0) return "ERROR";
    for(let i = 0 ; i < repeats ; i++) result += word;
    return result;
};
// Do not edit below this line
module.exports = repeatString;
