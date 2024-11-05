const fibo = (n => {
    if (n === 1 || n === 2){
        return n-1;
    }
    return fibo(n-1) + fibo(n-2);
})

for (let x = 1; x <= 10; x ++){
    console.log(fibo(x));
}
