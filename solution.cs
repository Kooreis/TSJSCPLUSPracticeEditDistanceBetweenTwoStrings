Here is a JavaScript console application that calculates the edit distance between two strings:

```javascript
function editDistance(str1, str2, m, n) {
    if (m == 0) return n;
    if (n == 0) return m;

    if (str1[m - 1] == str2[n - 1])
        return editDistance(str1, str2, m - 1, n - 1);

    return 1 + Math.min(editDistance(str1, str2, m, n - 1), 
                        editDistance(str1, str2, m - 1, n), 
                        editDistance(str1, str2, m - 1, n - 1)
                       );
}

let str1 = "sunday";
let str2 = "saturday";

console.log(editDistance(str1, str2, str1.length, str2.length));
```

This program uses a recursive function to calculate the edit distance between two strings. The edit distance is the minimum number of operations (insertions, deletions, and substitutions) required to transform one string into another. The function takes four arguments: the two strings to compare and their lengths. It then compares the characters of the strings from the end. If the characters are the same, it moves to the next pair of characters. If they are different, it performs one of the three operations and adds 1 to the edit distance. The function returns the minimum edit distance. The program then prints the edit distance to the console.