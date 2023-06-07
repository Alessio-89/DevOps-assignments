const numbers = [1, 2, 3, 4, 65];

const processNumbers = (array) => {

    const maxNumber = Math.max(...array);

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    const obj = {
        max: maxNumber,
        sum
    }

    return obj
}

const response = processNumbers(numbers)

console.log(response)
