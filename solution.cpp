```cpp
#include <iostream>
#include <string>
#include <vector>

int min(int x, int y, int z) {
    return std::min(std::min(x, y), z);
}

int editDist(std::string str1, std::string str2, int m, int n) {
    if (m == 0)
        return n;

    if (n == 0)
        return m;

    if (str1[m - 1] == str2[n - 1])
        return editDist(str1, str2, m - 1, n - 1);

    return 1 + min(editDist(str1, str2, m, n - 1),    // Insert
                   editDist(str1, str2, m - 1, n),    // Remove
                   editDist(str1, str2, m - 1, n - 1) // Replace
    );
}

int main() {
    std::string str1;
    std::string str2;
    std::cout << "Enter first string: ";
    std::cin >> str1;
    std::cout << "Enter second string: ";
    std::cin >> str2;

    std::cout << "Edit Distance: " << editDist(str1, str2, str1.length(), str2.length()) << std::endl;

    return 0;
}
```