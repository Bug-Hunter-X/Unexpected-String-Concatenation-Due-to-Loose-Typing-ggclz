# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's dynamic typing, it performs string concatenation when one of the arguments is a string.

## Bug Description
The `foo` function adds two parameters, `a` and `b`. When called with one number and one string, the `+` operator performs string concatenation.  This leads to unexpected behavior.  The `bar` function demonstrates this.

## Solution
The solution involves explicitly converting the parameters to numbers before performing the addition using the `Number()` function.