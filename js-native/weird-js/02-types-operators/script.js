// JavaScript uses 'The Dynamic Typing' approach: That's mean when JavaScript parses your code,
// it figures out what type of data yours variables hold
// Some other Languages like C or Java uses 'The Static Typing' approach.

// JavaScript supports natively 6 primitive types: Undefined, Null , Boolean, Number, String, Symbol
// A primitive type is a type of data that represents a single value.
// Undefined Type: lack of existence (shouldn't set a variable to this), accepts only one vealue
// Null Type:      lack of existence (can set a variable to this), accepts only one value
// Boolean Type:   accept 2 values true or false
// Number Type:    accepting both integer & floating numbers, there is one type for all
//                 and there are not trusty
// String Type:    a sequence of characters wrapped into single quotes '' or double quotes "".
//                 Lately, in EcmaScript6, we can wrapp it up in those special caracters `` for the
//                 use of interpolarity
// Symbol Type:    That's new in EcmaScript6.
//                 A symbol is a unique and immutable data type. It may be used as an identifier
//                 for object properties. ex: var sym = Symbol(myString);
//                 Calling multiple times the word Symbol wrapping the same string, will return
//                 multiple differents symbols
//                 Symbol("foo") === Symbol("foo"); // false

// The types 'Number', 'String' & 'Boolean' can be called with a setting value if we uses
// the keyword 'new' but not the type 'Symbol'
// ex:             var myNumber  = new Number(5);      // 5
//                 var myString  = new String('foo');  // foo
//                 var myBoolean = new Boolean(false); // false
//                 var mySymbol  = new Symbol('foo')   // throw an error
// But in this case, the returned value will be an 'Object' Type with
// the property '[[PrimitiveValue]]' having the value set in.

// An 'Operator' is a special function that is syntactically written differently,
// generally operators take two parameters and return one result.

// When multiple operators are used, JavaScirpt take first the one that has the higher
// 'operator precedence' by order then the next.
// When two operators have the same 'operator precedence', then JavaScript look to the
// 'operator associativity': that means it look what order operator functions get called in:
// left-to-Right, or, right-to-left
// ex:  var a = 3 + 4 * 5;    // the operator '*' has higher operator precedence than '+'
//                            // the operator '+' has higher operator precedence than '='
//                            // the operator '=' has operator associativity 'right-to-left'
//                            // the operators '+' & '*' have operator associativity 'left-to-right'
//                            // therefore a is equal to 23

// The full table of Operator precedence & associativity:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log('+++ Operators precedence & associativity +++');
var a = 5;
var b = 3;
var c = 8;

c = b = a;
console.log(a, b, c);         // 5, 5, 5

// When JavaScript execute a command that have operators, and finds that the kind of operation
// is not compatible with the given values. Due to 'The Dynamic Typing' approach, JavaScript
// convert some values to complete the operation.
// This process is called "Coercion"
console.log('+++ Coercion +++');
var d = 0 + '2';
console.log(d);              // 02

// For Comparaison Operators, JavaScript behaves a little bit strangely, when it convert some values
// to complete the process:
console.log('+++ Comparaison operators +++');
console.log(true > 5);       // false, true converted to 1, then 1 > 5 is false of course
console.log(8 < 6 < 4);      // true, why? because 8 < 6 is false then converted to 0, 0 < 4 is true

// For the equality comparaison, it is a little bit tough. There is two kind of equality operators:
// The 'Loose Equality' operator: '=='
// It's compare the values only:
console.log('+++ Loose equality compraison +++');
console.log(1         == 0);    // false
console.log(1         == true); // true
console.log(false     == 0);    // true
console.log(null      == 0);    // false, null is a special falsy value, but never equal to zero
console.log(undefined == 0);    // false, undefined is another falsy value, never equal to zero too
console.log(undefined == null); // true, Javascript interprets the two values as a lack of existence
console.log(false     == '');   // true, empty string converted to a number is always 0
console.log('text'    == true); // false, if a string have alphabetic characters, is considered NaN
                                // NaN: a special value that mean 'Not A Number'
// The 'Strict Equality' operator: '==='
// It's compare both, the values and types
console.log('+++ Strict equality compraison +++');
console.log(1         === 0);     // false
console.log(1         === true);  // false, not the same type
console.log(false     === 0);     // false, not the same type
console.log(null      === 0);     // false
console.log(undefined === 0);     // false
console.log(undefined === null);  // false, not the same type
console.log(''        === false); // false, not the same type
console.log('text'    === true);  // false

// To have more info on 'Equality comparaisons and Sameness':
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// We can use the 'Logical operators' like '&&' or '||' to set default values
console.log('+++ Default values +++');
console.log(1 || 0);                  // 1 is the only truthy value
console.log(undefined || 'my value'); // my value, undefined is falsy, but the string is not

function callYou(name) {
    console.log('Hi ' + (name || 'me'));
}

callYou('Dan'); // Hi Dan, the name variable is passed
callYou();      // Hi me, this is useful if we want default value in case of no parameters
