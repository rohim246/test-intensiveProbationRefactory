const arr = [15, 1, 3];

const nearestFibonacci = (array) => {
    let addResult = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        addResult += array[i];
    }

    let first = 0;
    let second = 1;
    let third = first + second;

    while (third <= addResult) {
        first = second;
        second = third;
        third = first + second;
    }

    let nearestFibonacci = (Math.abs(third - addResult) >= Math.abs(second - addResult) ? second : third)

    return nearestFibonacci - addResult;
}

console.log(nearestFibonacci(arr));

