// Example 1: Basic Promise with then and catch
let basicPromise = new Promise((resolve, reject) => {
    const a = 5;
    const b = 5;

    if (a === b) {
        resolve("The values are equal");
    } else {
        reject("The values are not equal");
    }
});

basicPromise
    .then(result => console.log("Example 1:", result))
    .catch(error => console.error("Example 1:", error));


// Example 2: Chaining Promises
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
    .then(result => {
        console.log("Example 2:", result);
        return "Processing data";
    })
    .then(processResult => {
        console.log("Example 2:", processResult);
        return "Data processed";
    })
    .then(finalResult => console.log("Example 2:", finalResult))
    .catch(error => console.error("Example 2:", error));


// Example 3: Using Promise.all
let promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 complete"), 1000));
let promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 complete"), 2000));
let promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 complete"), 3000));

Promise.all([promise1, promise2, promise3])
    .then(results => console.log("Example 3:", results))
    .catch(error => console.error("Example 3:", error));


// Example 4: Using Promise.race
let fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast promise complete"), 1000));
let slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow promise complete"), 3000));

Promise.race([fastPromise, slowPromise])
    .then(result => console.log("Example 4:", result))
    .catch(error => console.error("Example 4:", error));


// Example 5: Async/Await with try...catch
function checkEquality() {
    return new Promise((resolve, reject) => {
        const a = 4;
        const b = 4;

        setTimeout(() => {
            if (a === b) {
                resolve("Values are equal");
            } else {
                reject("Values are not equal");
            }
        }, 2000);
    });
}

async function asyncCheck() {
    try {
        let result = await checkEquality();
        console.log("Example 5:", result);
    } catch (error) {
        console.error("Example 5:", error);
    }
}

asyncCheck();


// Example 6: Async/Await with Promise.all
async function fetchAllData() {
    let promiseA = new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
    let promiseB = new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 2000));
    let promiseC = new Promise(resolve => setTimeout(() => resolve("Data from API 3"), 3000));

    try {
        let results = await Promise.all([promiseA, promiseB, promiseC]);
        console.log("Example 6:", results);
    } catch (error) {
        console.error("Example 6:", error);
    }
}

fetchAllData();
