Here is a TypeScript console application that calculates the edit distance between two strings:

```typescript
function editDistance(str1: string, str2: string): number {
    const len1 = str1.length;
    const len2 = str2.length;
    let dp: number[][] = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if (i == 0) {
                dp[i][j] = j;
            } else if (j == 0) {
                dp[i][j] = i;
            } else if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[len1][len2];
}

console.log(editDistance('kitten', 'sitting'));
console.log(editDistance('rosettacode', 'raisethysword'));
```

This program uses the dynamic programming approach to calculate the edit distance (also known as Levenshtein distance) between two strings. The edit distance is the minimum number of operations (insertions, deletions, and substitutions) required to transform one string into another.