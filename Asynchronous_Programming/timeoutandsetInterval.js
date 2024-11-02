console.log("Start");

setTimeout(() => {
    console.log("setTimeout 1");  // Executes after 0ms but goes to the callback queue
}, 0);

setImmediate(() => {
    console.log("setImmediate");  // Executes after I/O events are processed
});

process.nextTick(() => {
    console.log("process.nextTick");  // Executes before the next Event Loop tick
});

console.log("End");
