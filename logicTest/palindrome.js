function palindrome(str) {

    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;

    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('Radar'))
console.log(palindrome('Malam'))
console.log(palindrome('Kasur ini rusak'))
console.log(palindrome('Ibu Ratna antar ubi'))
console.log(palindrome('Malas'))
console.log(palindrome('Makan nasi goreng'))
console.log(palindrome('Balonku ada lima'))