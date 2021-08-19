const fizzBuzz = (int) => {
    let array = [];

    for (i = 1; i <= int; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push('fizzBuzz')
        } else if (i % 3 === 0) {
            array.push("Fizz");
        } else if (i % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(`${i}`);
        }
    }
    return array;
}

console.log(fizzBuzz(15));


// let str = "", x, y, a;
// for (a = 1; a <= 100; a++) {
//     x = a % 3 == 0;
//     y = a % 5 == 0;
//     if (x) {
//         str += "fizz"
//     }
//     if (y) {
//         str += "buzz"
//     }
//     if (!(x || y)) {
//         str += a;
//     }
//     str += "\n"
// }
// console.log(str);