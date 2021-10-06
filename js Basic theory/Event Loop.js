// This is to understand the concurrency of nodes and JavaScript.
// You have to understand the model well

//The execution model of JavaScript is event loop, call stack, callback queue
//It consists of concepts

//The event loop model uses several threads

//Among them, the thread where the JavaScript code that we wrote is executed is called the 'main thread'

//In one Node.js process, there is only one main thread, one line at a time

//However, there may be several worker threads that do other things (file I/O, network...)