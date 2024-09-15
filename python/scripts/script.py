import asyncio
import random
import time

# Function to generate a large list of random numbers
def generate_large_list(size):
    return [random.randint(0, 10000) for _ in range(size)]

# Function to perform heavy computation: sorting, summing, and finding the median
def heavy_computation(data):
    print('Starting heavy computation...')
    
    # Sorting the list
    start_time = time.time()
    sorted_data = sorted(data)
    print(f'Sort Time: {time.time() - start_time:.2f} seconds')

    # Summing the sorted list
    start_time = time.time()
    total_sum = sum(sorted_data)
    print(f'Sum Time: {time.time() - start_time:.2f} seconds')

    # Finding the median
    start_time = time.time()
    median = sorted_data[len(sorted_data) // 2]
    print(f'Median Time: {time.time() - start_time:.2f} seconds')

    print(f'Sum of sorted data: {total_sum}')
    print(f'Median of sorted data: {median}')

# Recursive function to compute Fibonacci numbers
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Function to perform recursive Fibonacci computations and measure performance
def compute_fibonacci_series(limit):
    print('Starting recursive Fibonacci computations...')
    
    for i in range(limit + 1):
        start_time = time.time()
        print(f'Fibonacci({i}) = {fibonacci(i)}')
        print(f'Fibonacci({i}) Time: {time.time() - start_time:.2f} seconds')

# Function to simulate high-load asynchronous operations with large data
async def simulate_high_load_async_operations():
    print('Starting high-load async operations...')
    
    async def async_operation(index):
        delay = random.randint(1000, 3000) / 1000  # Delay in seconds
        await asyncio.sleep(delay)
        large_data = generate_large_list(100000)  # Generate large data
        total_sum = sum(large_data)
        print(f'Async operation {index + 1} completed with sum {total_sum} after {delay:.2f} seconds')

    tasks = [async_operation(i) for i in range(20)]
    await asyncio.gather(*tasks)
    print('All high-load async operations completed.')

# Main function to run the tests
async def main():
    print('Starting tests...')

    # Generate a large list and perform heavy computations
    large_list = generate_large_list(200000)
    heavy_computation(large_list)

    # Compute Fibonacci series with recursion
    compute_fibonacci_series(20)  # Adjust limit for more intensive computation

    # Simulate high-load asynchronous operations
    await simulate_high_load_async_operations()

    print('Tests completed.')

# Run the main function
if __name__ == '__main__':
    asyncio.run(main())
