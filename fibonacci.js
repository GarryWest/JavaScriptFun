// example of recursion
// the initial exit rule is important to avoid an infinite loop
const fibo = (n => {
    if (n === 1 || n === 2){
        return n-1;
    }
    return fibo(n-1) + fibo(n-2);
})

// print first 10 Fibonacci numbers
for (let x = 1; x <= 10; x ++){
    console.log(fibo(x));
}
