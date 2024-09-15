// Heavy JavaScript Code for Testing

// Function to generate a large array of random numbers
function generateLargeArray(size) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 10000);
    }
    return arr;
}

// Function to perform a heavy computation: sorting, summing, and finding the median
function heavyComputation(array) {
    console.log('Starting heavy computation...');
    
    // Simulate a heavy computation by sorting the array
    console.time('Sort Time');
    const sortedArray = array.slice().sort((a, b) => a - b);
    console.timeEnd('Sort Time');

    // Simulate another heavy computation: summing sorted array
    console.time('Sum Time');
    const sum = sortedArray.reduce((acc, val) => acc + val, 0);
    console.timeEnd('Sum Time');

    // Finding the median of the sorted array
    console.time('Median Time');
    const median = sortedArray[Math.floor(sortedArray.length / 2)];
    console.timeEnd('Median Time');

    console.log(`Sum of sorted array: ${sum}`);
    console.log(`Median of sorted array: ${median}`);
}

// Recursive function to simulate a complex computation (Fibonacci)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to perform recursive computations and measure performance
function computeFibonacciSeries(limit) {
    console.log('Starting recursive Fibonacci computations...');
    
    for (let i = 0; i <= limit; i++) {
        console.time(`Fibonacci(${i})`);
        console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
        console.timeEnd(`Fibonacci(${i})`);
    }
}

// Function to simulate high-load asynchronous operations with large data
async function simulateHighLoadAsyncOperations() {
    console.log('Starting high-load async operations...');

    // Create an array of promises that process large amounts of data
    const promises = Array.from({ length: 20 }, (_, i) =>
        new Promise((resolve) => {
            const delay = Math.floor(Math.random() * 3000) + 1000;
            const largeDataArray = generateLargeArray(100000); // Generate large data
            setTimeout(() => {
                const sum = largeDataArray.reduce((acc, val) => acc + val, 0);
                console.log(`Async operation ${i + 1} completed with sum ${sum} after ${delay} ms`);
                resolve();
            }, delay);
        })
    );

    // Wait for all promises to resolve
    await Promise.all(promises);
    console.log('All high-load async operations completed.');
}

// Main function to run the tests
async function main() {
    console.log('Starting tests...');

    // Generate a large array and perform heavy computations
    const largeArray = generateLargeArray(200000);
    heavyComputation(largeArray);

    // Compute Fibonacci series with recursion
    computeFibonacciSeries(20); // Adjust limit for more intensive computation

    // Simulate high-load asynchronous operations
    await simulateHighLoadAsyncOperations();

    console.log('Tests completed.');
}

// Run the main function
main().catch(err => console.error('Error during tests:', err));
