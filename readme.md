**Doubts:**

[] Blog Page - with NAV + FLEX + GRID for entire page layout  
[] Github Profile Page
[] Bootstrap Breakpoints

### Async programming- Day -1: Callback

**Contents:**

[x] Callback  
[x] What's the callback? - call stack, web API, event loop, queue

call stack: The call stack is a datastructure that records where in the program execution we are. It keeps track of the currently executing function(s). when a function is invoked, it is placed on the top of the call stack, and when it completes, it is removed from the call stack.

web API: The web API is a feature of the browser that provides functionality beyond what the JavaScript language provides. The web API is used to handle events, setTimeout, XMLHttpRequest, fetch, etc.

Stack: The stack is a data structure that uses the Last In, First Out (LIFO) principle. The last function that was pushed onto the stack is the first to be popped off the stack.

Queue: The queue is a data structure that uses the First In, First Out (FIFO) principle. The first function that was pushed onto the queue is the first to be popped off the queue.

asynchronous vs synchronous:

- asynchronous: The code will not wait for the result of the function to execute the next line of code.
- synchronous: The code will wait for the result of the function to execute the next line of code.

Event Loop: The event loop is a mechanism that continuously checks the call stack to see if there's any function that needs to be executed. If the call stack is empty, the event loop checks the message queue to see if there's any function that needs to be pushed onto the call stack.

Queue: The queue holds tasks/callbacks that are ready to be executed. The event loop checks the queue and pushes the tasks/callbacks onto the call stack.

[x] Use & its purpose of the callback

- Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. (synchronous)

[x] Pain of callback

Session reference - http://latentflip.com/loupe/

Pre-read:
https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/

Callback Hell Task:

https://docs.google.com/document/d/1K6jW6TPmqWvzoRAm2t-GlOAxKmMRsLt5zaCsdcH_3LM/edit
