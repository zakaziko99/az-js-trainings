//    -----------------------------------------------------------------------------------
//    |  Execution Context                                                              |
//    |                                                                                 |
//    |  -----------------             -----------------             -----------------  |
//    |  | Global Object |             | this          |             | Outer         |  |
//    |  |               |             |               |             | Environment   |  |
//    |  |               |             |               |             |               |  |
//    |  -----------------             -----------------             -----------------  |
//    |                                                                                 |
//    |  -----------------------------------------------------------------------------  |
//    |  | The code                                                                  |  |
//    |  |                                                                           |  |
//    |  |                                                                           |  |
//    |  -----------------------------------------------------------------------------  |
//    -----------------------------------------------------------------------------------

// JavaScript's Execution context runs through 2 phases:
// Creation Phase: Creating the 'Global Object', 'this' and the 'Outer Environment' + Setting
//                  variables & functinos on the memory
// Execution code Phase: interpreting the code line by line

// Javascript is a single threaded program => run one command at a time
// Javascript is also a synchronous execution program => run the commands in order

// undefined = 5; It will be possible to set 'undeifined' to another value with ECMA3

b();            // It's throw an error if b is function variable through a function expression
                // It's a function Invocation, by simply using parenthesis
console.log(a); // It's throw an error if a is never declared through a var expression
                // a & b are set on the memory, therefore no errors will be thrown
                // The function b is executed instead of late declaration
                // This phenomenon is called 'Hoisting'

var a = 'Hello my Friend';

function b() {  // new Execution Context is created on the The Execution Contexts Stack
                // when the function b is invoked
                // When the function finishes its code execution, it's execution context is popped
    console.log('function b called!');
}

var c = 1;
d();

function d() {  // new Execution Context, it's Outer Environment is the Global Object
    var c = 2;
    console.log('function d called!');
    e();
}

function e() {  // new Execution Context, it's Outer Environment is the Global Object
    console.log('function e called!');
    console.log(c);
                // When c is does not exist on this Execution Context,
                // it will find out on the Outer Environment not on the execution context above
                // in the execution contexts stack, it's important to understand this
                // This is called The Scope Chain, sort of 'Outer Environment' Stack
}

// ----------------------------------------------------------------------------------------------
// The asynchronous callbacks are not really asynchronous, but placed on 'Events Queue' stack,
// that will be executed once the Global Execution Context is finished.
// The function callback when it's invoked, will create a new Execution Context.

function waitNSeconds(n) {
    var ms = (parseInt(n) * 1000) + new Date().getTime();
    while (ms > new Date()) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitNSeconds(10);
console.log('finished context execution');
