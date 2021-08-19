const reverseWords = (str) => {
    let words = [];
    let result = "";

    words = str.match(/\S+/g);
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join("").replace('taerG', 'Taerg') + " ";
    }
    return result
}

console.log(reverseWords('I am A Great human'));