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

var a = 5;
var b = 3;
var c = 8;

c = b = a;
console.log(a, b, c);         // 5, 5, 5
