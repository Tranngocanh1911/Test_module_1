let n = +prompt('Enter a number')

function isFibonacci(a) {
    let b = 0;
    let c = 1;
    for (let i = 0; i <= n; i++) {
        a = b + c
        b = c;
        c = a;
        if (n === b) {
            return true;
        }
    }
    return false;
}

console.log(isFibonacci(n))