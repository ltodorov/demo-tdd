# demo-tdd
Playing with TDD

## Kata no. 1 - Greeter

Write a `Greeter` class with `greet` function that receives a name as input and outputs `Hello <name>`. The signature of `greet` should not change throughout the kata. You are allowed to construct `Greeter` object as you please.

1. `greet` trims the input
2. `greet` capitalizes the first letter of the name
3. `greet` returns `Good morning <name>` when the time is 06:00-12:00
4. `greet` returns `Good evening <name>` when the time is 18:00-22:00
5. `greet` returns `Good night <name>` when the time is 22:00-06:00
6. `greet` logs into console each time it is called

## Kata no. 2 - String Calculator

Write a method `add` under an object `StringCalculator` that, given a delimited string, returns the sum of the numbers in the string.

1. An empty string returns zero `'' => 0`
2. A single number returns the value `'1' => 1 '2' => 2`
3. Two numbers, comma delimited, returns the sum `'1,2' => 3 '10,20' => 30`
4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`
6. Negative numbers throw an exception with the message `'-1,2,-3' => 'negatives not allowed: -1,-3'`

## Kata no. 3 - Prime Factors

## Kata no. 4 - Bowling Game