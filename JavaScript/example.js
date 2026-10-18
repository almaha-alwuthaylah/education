const numbers = [12, 45, 7, 89, 23, 56];

function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log("The largest number is:", findLargest(numbers));