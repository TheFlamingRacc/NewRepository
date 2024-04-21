function isPalindrome(str) {
    let originalStr = str.toLowerCase().split('').join('');
    let reversedStr = str.toLowerCase().split('').reverse().join('');
    if (originalStr === reversedStr) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindrome("mom");