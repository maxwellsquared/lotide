# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learning at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @doublemaxwell/lotide`

**Require it:**

`const _ = require('@doublemaxwell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Get the headliner, the main event--the first item in an array!
* `tail(array)`: Off with its head! Get back an array free from the pesky first entry.
* `middle(array)`: Put in an array and get the object right in the middle (or, if it's even, the two objects in the middle). Just think Goldilocks.
* `countLetters(string)`: Do you need to count the letters in a string? If so, rethink your life... but run this function first!
* `countOnly(allItems, itemsToCount)`: Takes in an array of items as well as an array of items to count.
* `eqArrays(someArray, anotherArray)`: Are two arrays identical? This handy function will soothe your curiosity.
* `eqObjects(someObject, anotherObject)`: See above, but with objects.
* `findKey(someObject, someFunction)`: Write a lil function to find a specific object key. How about `x => x.stars === 2`, which will find a two-star restaurant in a list of other restaurants?
* `findKeyByValue(someObject, someKey)`: Does what it says on the tin.
* `letterPositions(someString)`: Gives you the positions of letters in a string.
* `map(someArray, someFunction)`: Lets you do something to every item in an array. Pass in a function and go wild.
* `takeUntil(someArray, someFunction)`: Cuts off an array when a function returns TRUE. If only giving up other things was so easy.
* `without(someArray, anotherArray)`: Sends back an array without the inconvenient bits.

