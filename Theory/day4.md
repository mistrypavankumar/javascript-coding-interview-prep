###  Question 5: Polyfills for map, filter, reduce, and forEach

+ These are array methods used for iteration and transformation

<table>
    <tr>
        <th>Method</th>
        <th>Purpose</th>
        <th>Returns</th>
    </tr>
    <tbody>
        <tr>
            <td>map()</td>
            <td>Transform each item</td>
            <td>New array</td>
        </tr>
        <tr>
            <td>filter()</td>
            <td>Filters items based on a collection</td>
            <td>New array</td>
        </tr>
        <tr>
            <td>reduce()</td>
            <td>Reduces array to a single value</td>
            <td>Any single value</td>
        </tr>
        <tr>
            <td>forEach()</td>
            <td>Executes a function for each item (side-effect only)</td>
            <td>undefined</td>
        </tr>
    </tbody>
</table>


### Example

```
const arr = [1, 2, 3, 4];

// map
console.log(arr.myMap(x => x * 2)); // [2, 4, 6, 8]

// filter
console.log(arr.myFilter(x => x > 2)); // [3, 4]

// reduce
console.log(arr.myReduce((acc, cur) => acc + cur, 0)); // 10

// forEach
arr.myForEach(x => console.log(x)); // 1 2 3 4 (prints one per line)

```