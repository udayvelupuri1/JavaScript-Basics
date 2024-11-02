const fs = require('fs');
console.log('First Line');  // Synchronous

let data;
try {
    data = fs.readFileSync('f1.txt', 'utf-8');  // Synchronous - blocks until file is read
    console.log('F1 file Data (Sync) -> ' + data);  // Synchronous - executed after file read
} catch (err) {
    console.error('Error reading file:', err);  // Synchronous - executed in case of error
}

console.log('Last Line');  // Synchronous - executed after file read
