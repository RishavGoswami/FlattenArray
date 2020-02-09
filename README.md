# Flatten Nested Array

Flatten N number of nested array into a single array. 

# Installation

```
NPM: npm i flatten-nested-array --save

YARN: yarn add flatten-nested-array
```


#### How to use

```
import { fattenArray } from 'flatten-nested-array'
                    OR
const fattenArray = require('flatten-nested-array')


console.log(flattenArray([[["a"]], [["b"]]]));
// Output: ["a", "b"]

console.log(flattenArray([1, [2], [3, [[4]]]]));
// Output: [1, 2, 3, 4]
```