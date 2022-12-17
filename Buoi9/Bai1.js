function isPrime(a) {
    for (let i = 2; i < a; i++){
        if (a%i == 0) {
            return false;
        }
    }
    return a>1;
}

console.log(isPrime(7)) //output: true;
console.log(isPrime(10)) //output: false;