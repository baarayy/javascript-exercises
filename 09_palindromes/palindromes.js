function filterEnglishLetters(inputString) {
    // Use the split() method to convert the string into an array of characters,
    // then use filter() to keep only English letters (a-zA-Z),
    // and finally, join the filtered characters back into a string.
    return inputString.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('');
}
const palindromes = function (word) {
    word = filterEnglishLetters(word);
    let len = word.length;
    word = word.toLowerCase();
    for(let i = 0 ; i < len / 2 ; i++) {
        if(word[i] != word[len - i - 1]) return false;
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
